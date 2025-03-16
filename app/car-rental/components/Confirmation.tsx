'use client'
import { BookingFormData } from '@/app/types';
import { Car } from '@/app/types';

interface ConfirmationModalProps {
  formData: BookingFormData;
  selectedCar?: Car | null;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({ 
  formData, 
  selectedCar, 
  onClose, 
  onConfirm 
}: ConfirmationModalProps) {
  // Calculate duration in days
  const calculateDuration = () => {
    if (!formData.pickupDate || !formData.returnDate) return 1;
    
    const start = new Date(formData.pickupDate);
    const end = new Date(formData.returnDate);
    const differenceInTime = end.getTime() - start.getTime();
    return Math.max(1, Math.ceil(differenceInTime / (1000 * 3600 * 24)));
  };
  
  const days = calculateDuration();
  const totalPrice = selectedCar ? selectedCar.dailyRate * days : 0;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Confirm Booking</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Customer Details</h3>
            <p><span className="text-gray-500">Name:</span> {formData.customerName}</p>
            <p><span className="text-gray-500">Email:</span> {formData.customerEmail}</p>
            <p><span className="text-gray-500">Phone:</span> {formData.customerPhone}</p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-700">Booking Details</h3>
            <p><span className="text-gray-500">Car Type:</span> {selectedCar ? selectedCar.name : formData.carType}</p>
            <p><span className="text-gray-500">Pickup Location:</span> {formData.pickupLocation}</p>
            <p><span className="text-gray-500">Pickup Date:</span> {formData.pickupDate} at {formData.pickupTime}</p>
            <p><span className="text-gray-500">Return Date:</span> {formData.returnDate} at {formData.returnTime}</p>
          </div>
          
          {selectedCar && (
            <div>
              <h3 className="font-semibold text-gray-700">Price Details</h3>
              <p><span className="text-gray-500">Daily Rate:</span> ${selectedCar.dailyRate}</p>
              <p><span className="text-gray-500">Duration:</span> {days} day{days !== 1 ? 's' : ''}</p>
              <p className="font-bold text-lg mt-1"><span className="text-gray-500">Total:</span> ${totalPrice}</p>
            </div>
          )}
          
          <div className="text-sm text-gray-500 bg-gray-100 p-3 rounded-md">
            By confirming this booking, you agree to our terms and conditions. A confirmation will be sent to your email.
          </div>
        </div>
        
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-primary hover:bg-blue-700 text-white rounded-md transition"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
}