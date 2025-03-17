'use client'
import Image from "next/image";
import React, { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  // Modal state
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleOpenModal = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation before showing modal
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return; // Let the browser handle required field validation
    }
    
    setShowModal(true);
  };
  
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    setShowModal(false);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Your message has been sent successfully!'
        });
        // Reset form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An error occurred while sending your message. Please try again.'+ error
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 sm:px-6 md:px-[10%] py-8 md:py-12">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8">
        {/* Left column - Info section */}
        <div className="w-full py-6 md:py-10 flex flex-col gap-4">
          <p className="text-goldss text-sm md:text-base">GET IN TOUCH</p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Love to Hear From You, Get In Touch
          </p>
          <p className="text-typo text-sm">
            Feel free to reach out for inquiries about security services, visa
            processing, immigration advisory, and logistics solutions.
          </p>
          <div className="relative w-full mt-4">
            <Image 
              src={'/get-touch.png'} 
              alt="Contact us illustration" 
              width={1000} 
              height={200} 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right column - Contact form */}
        <div className="w-full space-y-4 sm:space-y-6 my-6 sm:my-10 lg:my-16 py-6 sm:py-8 lg:py-10 px-5 sm:px-8 lg:px-10 bg-[#F1F4FF] rounded-lg">
          <p className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-10 text-center">
            Contact Us Now!
          </p>
          
          {submitStatus && (
            <div className={`mb-4 p-3 rounded ${
              submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 
              'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}
          
          <form onSubmit={handleOpenModal}>
            <div className="space-y-4 sm:space-y-6">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name" 
                className="p-2 sm:p-3 border-none rounded-xl w-full"
                required
                disabled={isSubmitting}
              />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email" 
                className="p-2 sm:p-3 border-none rounded-xl w-full"
                required
                disabled={isSubmitting}
              />
              <textarea 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 sm:p-3 rounded-xl" 
                placeholder="Message"
                required
                disabled={isSubmitting}
              />
              <button 
                type="submit"
                className={`bg-primary w-full rounded-xl text-white py-2 sm:py-3 hover:opacity-90 transition-opacity ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Contact Us'}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>
          <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4 z-10 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold">Confirm Submission</h3>
              <div className="w-16 h-1 bg-primary mx-auto mt-2"></div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p className="text-gray-900">{formData.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-gray-900">{formData.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Message</p>
                <p className="text-gray-900 max-h-32 overflow-y-auto">{formData.message}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 sm:justify-end">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Confirm & Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}