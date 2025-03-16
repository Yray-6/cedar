import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body
    const body = await request.json();
    
    const {
      pickupLocation,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      carType,
      carName,
      carId,
      dailyRate,
      customerName,
      customerEmail,
      customerPhone
    } = body;
    
    // Validate required fields
    if (!pickupLocation || !pickupDate || !pickupTime || !returnDate || !returnTime ||
        !customerName || !customerEmail || !customerPhone) {
      return NextResponse.json(
        { message: 'All fields are required' }, 
        { status: 400 }
      );
    }
    
    // Validate dates
    const start = new Date(pickupDate);
    const end = new Date(returnDate);
    
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return NextResponse.json(
        { message: 'Invalid date format' },
        { status: 400 }
      );
    }
    
    if (end < start) {
      return NextResponse.json(
        { message: 'Return date must be after pickup date' },
        { status: 400 }
      );
    }
    
    // Calculate duration and price
    const differenceInTime = end.getTime() - start.getTime();
    const differenceInDays = Math.max(1, Math.ceil(differenceInTime / (1000 * 3600 * 24)));
    const totalPrice = dailyRate ? differenceInDays * dailyRate : 0;
    
    // Check if environment variables are set
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email configuration missing');
      return NextResponse.json(
        { message: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }
    
    try {
      // Create transporter
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      
      // Test connection - but don't fail the request if this doesn't work
      // as we might still want to store the booking in a database
      try {
        await transporter.verify();
      } catch (verifyError) {
        console.error('Email verification failed:', verifyError);
        // Continue with the request, but log the error
      }
      
      // Email content
      const mailOptions = {
        from: process.env.EMAIL_FROM || `Car Rental <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Car Booking: ${carName || carType || 'Car Rental'}`,
        html: `
          <h1>New Car Booking Request</h1>
          <h2>Customer Information</h2>
          <p><strong>Name:</strong> ${customerName}</p>
          <p><strong>Email:</strong> ${customerEmail}</p>
          <p><strong>Phone:</strong> ${customerPhone}</p>
          
          <h2>Booking Details</h2>
          <p><strong>Car:</strong> ${carName || carType || 'Not specified'}</p>
          ${carId ? `<p><strong>Car ID:</strong> ${carId}</p>` : ''}
          ${dailyRate ? `<p><strong>Daily Rate:</strong> $${dailyRate}</p>` : ''}
          <p><strong>Pick-up Location:</strong> ${pickupLocation}</p>
          <p><strong>Pick-up Date:</strong> ${pickupDate} at ${pickupTime}</p>
          <p><strong>Return Date:</strong> ${returnDate} at ${returnTime}</p>
          <p><strong>Duration:</strong> ${differenceInDays} day${differenceInDays !== 1 ? 's' : ''}</p>
          ${dailyRate ? `<p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>` : ''}
        `,
      };
      
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails
      // In a real app, you might want to queue the email for retry
    }
    
    // In a real app, you would store the booking in a database here
    // const booking = await prisma.booking.create({
    //   data: {
    //     carId,
    //     customerName,
    //     customerEmail,
    //     customerPhone,
    //     pickupLocation,
    //     pickupDate,
    //     pickupTime,
    //     returnDate,
    //     returnTime,
    //     totalPrice,
    //   },
    // });
    
    // Return success response
    return NextResponse.json({
      message: 'Booking request submitted successfully',
      bookingDetails: {
        car: carName || carType || 'Not specified',
        pickupLocation,
        pickupDate,
        pickupTime,
        returnDate,
        returnTime,
        duration: differenceInDays,
        totalPrice: totalPrice || 0
      }
    });
    
  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}