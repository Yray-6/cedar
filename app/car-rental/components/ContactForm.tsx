"use client";
import React, { useState } from "react";
import Image from "next/image";
import LoadingPage from "@/app/Loading";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  // Modal state
  const [showModal, setShowModal] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: data.message || "Your message has been sent successfully!",
        });
        // Reset form after successful submission
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message:
          "An error occurred while sending your message. Please try again."+ error,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-[8%] bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Contact Us</h2>
          <div className="w-24 sm:w-32 h-1 bg-goldss mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8">
            {submitStatus && (
              <div
                className={`mb-6 p-4 rounded ${
                  submitStatus.success
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleOpenModal}>
              <div className="mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-goldss"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-goldss"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Your Message*"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-goldss"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`bg-goldss hover:bg-amber-600 text-black font-medium py-3 px-8 rounded transition duration-300 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send A Message"}
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2 py-10 md:h-auto">
            <div className="h-full relative">
              <Image
                src="/keys.jpg"
                alt="Car key handover"
                width={600}
                height={500}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={handleCloseModal}></div>
          <div className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4 z-10 shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Confirm Submission</h3>
              <div className="w-16 h-1 bg-goldss mx-auto mt-2"></div>
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
            
            <div className="flex space-x-3 justify-end">
              <button
                type="button"
                onClick={handleCloseModal}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 text-sm font-medium text-black bg-goldss rounded hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-goldss"
              >
                Confirm & Send
              </button>
            </div>
          </div>
        </div>
      )}
           {isSubmitting && <LoadingPage text='Sending Please wait'/>}
    </section>
  );
};

export default ContactForm;