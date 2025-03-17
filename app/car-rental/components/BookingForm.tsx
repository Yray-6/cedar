'use client'
import { useState } from 'react';
import { BookingFormData } from '@/app/types';
import ConfirmationModal from './Confirmation';

interface BookingFormProps {
  onSubmit: (formData: BookingFormData) => Promise<void>;
}

export default function BookingForm({ onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    pickupLocation: '',
    pickupDate: '',
    returnDate: '',
    carType: '',
    pickupTime: '',
    returnTime: '',
    customerName: '',
    customerEmail: '',
    customerPhone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show confirmation modal instead of submitting directly
    setShowConfirmation(true);
  };
  
  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    setShowConfirmation(false);
    
    try {
      await onSubmit(formData);
      
      // Reset form on success
      setFormData({
        pickupLocation: '',
        pickupDate: '',
        returnDate: '',
        carType: '',
        pickupTime: '',
        returnTime: '',
        customerName: '',
        customerEmail: '',
        customerPhone: ''
      });
    } catch (e) {
        console.log(e)
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <form onSubmit={handleFormSubmit} className="bg-goldss px-[5%] py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-md">
              <div className="relative">
                <select 
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 appearance-none rounded-md"
                >
                  <option value="">Pickup Location</option>
                  <option value="airport">Airport</option>
                  <option value="downtown">Downtown</option>
                  <option value="hotel">Hotel</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md">
              <div className="relative">
                <input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 appearance-none rounded-md"
                  placeholder="Pickup Date"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md">
              <div className="relative">
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 appearance-none rounded-md"
                  placeholder="Return Date"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="bg-white rounded-md">
              <div className="relative">
                <select
                  name="carType"
                  value={formData.carType}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 appearance-none rounded-md"
                >
                  <option value="">Car Type</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Mini coupe">Mini coupe</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md">
              <div className="relative">
                <select
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 appearance-none rounded-md"
                >
                  <option value="">Pickup Time</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md">
              <div className="relative">
                <select
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 appearance-none rounded-md"
                >
                  <option value="">Return Time</option>
                  <option value="08:00">08:00</option>
                  <option value="09:00">09:00</option>
                  <option value="10:00">10:00</option>
                  <option value="11:00">11:00</option>
                  <option value="12:00">12:00</option>
                  <option value="13:00">13:00</option>
                  <option value="14:00">14:00</option>
                  <option value="15:00">15:00</option>
                  <option value="16:00">16:00</option>
                  <option value="17:00">17:00</option>
                  <option value="18:00">18:00</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-md lg:col-span-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 appearance-none rounded-md"
                  placeholder="Your Name"
                />
                <input
                  type="tel"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleChange}
                  required
                  className="w-full py-3 px-4 appearance-none rounded-md"
                  placeholder="Your Phone"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-3 bg-white rounded-md">
              <input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleChange}
                required
                className="w-full py-3 px-4 appearance-none rounded-md"
                placeholder="Your Email"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-primary hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Processing...' : 'Book Now'}
            </button>
          </div>
          
          <div className="text-center mt-6 text-white">
            <p className="flex items-center justify-center text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Need Quick Response? Call US +234 803 304 1250 OR 080 3282 4602
            </p>
          </div>
        </div>
      </form>
      
      {/* Confirmation Modal */}
      {showConfirmation && (
        <ConfirmationModal
          formData={formData}
          onClose={() => setShowConfirmation(false)}
          onConfirm={handleConfirmBooking}
        />
      )}
    </>
  );
}