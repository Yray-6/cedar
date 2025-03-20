'use client'
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BookingForm from '../components/BookingForm';
import { Car, BookingFormData } from '@/app/types';
import CarCard from './CarCards';
import BookingModal from './BookNow';

export default function Main() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [bookingError, setBookingError] = useState<string>('');
  
  // Sample car data - in a real app, this would come from an API/database
  const featuredCars: Car[] = [
    {
      id: 1,
      name: 'Toyota Prado',
      image: '/jeep.jpg',
      seats: 5,
      fuelType: 'Gasoline',
      type: 'SUV',
      dailyRate: 200
    },
    {
      id: 2,
      name: 'LEXUS GX460',
      image: '/lexus.png',
      seats: 2,
      fuelType: 'Electric',
      type: 'Sedan',
      dailyRate: 340
    },
    {
      id: 3,
      name: 'HYUNDAI SANTA FE',
      image: '/hyndai.png',
      seats: 4,
      fuelType: 'Gasoline',
      type: 'Wagon',
      dailyRate: 167
    }
    ,
    {
      id: 4,
      name: 'Hyundai Sonata',
      image: '/sonata.svg',
      seats: 4,
      fuelType: 'Gasoline',
      type: 'Sedan',
      dailyRate: 167
    },
    {
      id: 6,
      name: 'Nissan Centra',
      image: '/nissan.svg',
      seats: 4,
      fuelType: 'Gasoline',
      type: 'Sedan',
      dailyRate: 167
    },
  ];
  
  const handleBookNowClick = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset after animation completes
    setTimeout(() => {
      setSelectedCar(null);
    }, 300);
  };
  
  const handleMainFormSubmit = async (formData: BookingFormData) => {
    setBookingError('');
    
    try {
      // Send the booking data to your API
      const response = await fetch('/api/book-car', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit booking');
      }
      
      setBookingSuccess(true);
      
      // Reset success message after some time
      setTimeout(() => {
        setBookingSuccess(false);
      }, 5000);
      
    } catch (error: unknown) {
      // Properly type check the error before accessing properties
      if (error instanceof Error) {
        setBookingError(error.message);
      } else if (typeof error === 'string') {
        setBookingError(error);
      } else {
        setBookingError('Something went wrong');
      }
      throw error; // Re-throw to let the form component know
    }
  };
  
  const handleModalFormSubmit = async (formData: BookingFormData & { carId: number; carName: string; dailyRate: number }) => {
    setBookingError('');
    
    try {
      // Send the booking data to your API
      const response = await fetch('/api/book-car', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit booking');
      }
      
      setBookingSuccess(true);
      
      // Close modal after success message is shown
      setTimeout(() => {
        handleCloseModal();
        
        // Reset success message after modal is closed
        setTimeout(() => {
          setBookingSuccess(false);
        }, 3000);
      }, 2000);
      
    } catch (error: unknown) {
      // Properly type check the error before accessing properties
      if (error instanceof Error) {
        setBookingError(error.message);
      } else if (typeof error === 'string') {
        setBookingError(error);
      } else {
        setBookingError('Something went wrong');
      }
      throw error; // Re-throw to let the form component know
    }
  };

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Custom CSS for carousel to be added in useEffect
  const carouselStyles = `
    .car-slider .slick-arrow {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      width: 40px;
      height: 40px;
      z-index: 10;
      transition: all 0.3s ease;
    }
    .car-slider .slick-arrow:hover {
      background: rgba(0, 0, 0, 0.8);
    }
    .car-slider .slick-prev {
      left: -5px;
    }
    .car-slider .slick-next {
      right: -5px;
    }
    .car-slider .slick-slide {
      padding: 0 10px;
    }
    .car-slider .slick-list {
      margin: 0 -10px;
    }
  `;
  
  return (
    <div className=''>
      {/* Add custom styles */}
      <style jsx global>{carouselStyles}</style>
    
      {/* Featured Cars - Now with Carousel */}
      <section className="py-12 px-[5%]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-2">Our Featured Cars</h2>
          <div className="w-24 h-1 bg-goldss mx-auto mb-8"></div>
          
          <div className="car-slider">
            <Slider {...sliderSettings}>
              {featuredCars.map((car) => (
                <div key={car.id} className="px-2">
                  <CarCard
                    car={car} 
                    onBookNow={handleBookNowClick} 
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
        
      {/* Booking Form Section */}
      <section className="mb-12">
        {bookingSuccess && (
          <div className="container mx-auto px-4 mb-4">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <strong>Success!</strong> Your booking has been submitted. We&apos;ll contact you shortly.
            </div>
          </div>
        )}
        
        {bookingError && (
          <div className="container mx-auto px-4 mb-4">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              <strong>Error:</strong> {bookingError}
            </div>
          </div>
        )}
        <h2 className="text-3xl font-semibold mt-10 text-center mb-2">Book Now</h2>
        <div className="w-24 h-1 bg-goldss mx-auto mb-8"></div>
        <BookingForm onSubmit={handleMainFormSubmit} />
      </section>

      {/* Modal for booking from car cards */}
      {isModalOpen && selectedCar && (
        <BookingModal
          car={selectedCar}
          onClose={handleCloseModal}
          onSubmit={handleModalFormSubmit}
        />
      )}
      
      {/* Success Notification */}
      {bookingSuccess && (
        <div className="fixed bottom-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-md z-50">
          <div className="flex">
            <div className="py-1">
              <svg className="fill-current h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold">Booking Successful!</p>
              <p className="text-sm">We&apos;ll contact you shortly with details.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}