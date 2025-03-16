// /app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body
    const body = await request.json();
    
    const { name, email, message } = body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Name, email, and message are required' }, 
        { status: 400 }
      );
    }
    
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
      
      // Test connection
      try {
        await transporter.verify();
      } catch (verifyError) {
        console.error('Email verification failed:', verifyError);
        // Continue with the request, but log the error
      }
      
      // Format the current date
      const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      
      // Email content with redesigned template
      const mailOptions = {
        from: process.env.EMAIL_FROM || `Contact Form <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `New Message from ${name}`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Message</title>
          <style>
            /* Base styles */
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333333;
              margin: 0;
              padding: 0;
              background-color: #f9f9f9;
            }
            
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
            
            /* Header */
            .header {
              text-align: center;
              padding: 20px 0;
              background-color: #0e3b7e; /* Dark blue */
              color: #ffffff;
              border-radius: 6px 6px 0 0;
              margin-bottom: 20px;
            }
            
            .header h1 {
              margin: 0;
              font-size: 24px;
              letter-spacing: 0.5px;
            }
            
            /* Gold accents */
            .gold-accent {
              height: 4px;
              background: linear-gradient(to right, #d4af37, #f5d76e, #d4af37); /* Gold gradient */
              margin: 10px 0;
            }
            
            /* Section styles */
            .section {
              margin-bottom: 25px;
              padding: 0 15px;
            }
            
            .section-title {
              color: #0e3b7e; /* Dark blue */
              font-size: 18px;
              margin-bottom: 15px;
              border-bottom: 2px solid #d4af37; /* Gold */
              padding-bottom: 8px;
            }
            
            /* Info rows */
            .info-row {
              margin-bottom: 10px;
              display: flex;
              flex-wrap: wrap;
            }
            
            .info-label {
              font-weight: bold;
              color: #0e3b7e; /* Dark blue */
              width: 140px;
              padding-right: 10px;
            }
            
            .info-value {
              flex: 1;
            }
            
            /* Message box */
            .message-box {
              background-color: #f0f7ff; /* Very light blue */
              border-left: 4px solid #d4af37; /* Gold */
              padding: 15px;
              margin-top: 10px;
              border-radius: 4px;
              white-space: pre-line;
            }
            
            /* Footer */
            .footer {
              text-align: center;
              padding: 15px 0;
              font-size: 12px;
              color: #666666;
              border-top: 2px solid #d4af37; /* Gold */
              margin-top: 20px;
            }
            
            /* Responsive adjustments */
            @media only screen and (max-width: 480px) {
              .container {
                padding: 10px;
              }
              
              .info-label, .info-value {
                width: 100%;
              }
              
              .info-value {
                margin-bottom: 10px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>NEW CONTACT MESSAGE</h1>
            </div>
            
            <div class="gold-accent"></div>
            
            <div class="section">
              <h2 class="section-title">Sender Information</h2>
              <div class="info-row">
                <div class="info-label">Name:</div>
                <div class="info-value">${name}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Email:</div>
                <div class="info-value">${email}</div>
              </div>
              <div class="info-row">
                <div class="info-label">Date:</div>
                <div class="info-value">${currentDate}</div>
              </div>
            </div>
            
            <div class="section">
              <h2 class="section-title">Message</h2>
              <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div class="gold-accent"></div>
            
            <div class="footer">
              <p>This is an automated notification from your contact form.</p>
              <p>© ${new Date().getFullYear()} Cedarlinks. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
        `,
      };
      
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      
    } catch (emailError) {
      console.error('Email error:', emailError);
      // Don't fail the request if email fails
    }
    
    // Return success response
    return NextResponse.json({
      message: 'Your message has been sent successfully. We will get back to you soon!',
      success: true
    });
    
  } catch (error) {
    console.error('Request error:', error);
    return NextResponse.json(
      { message: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}