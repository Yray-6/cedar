'use client'
import React, { useState } from 'react';
import { ArrowRight, ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function About() {
  const [isVisionOpen, setIsVisionOpen] = useState(false);
  const [isValuesOpen, setIsValuesOpen] = useState(false);

  return (
    <div className="lg:mt-20 mt-56 grid grid-cols-1 lg:grid-cols-11 gap-6 lg:gap-10 px-4 sm:px-[5%] md:px-[10%]">
      {/* Text Content Section */}
      <div className="col-span-1 lg:col-span-6 flex flex-col justify-center gap-2 sm:gap-3 order-2 lg:order-1">
        <p className="text-blue font-medium">About Us</p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
          Unveiling the Vision and Values of CedarLinks
        </p>
        <p className="text-typo text-xs sm:text-sm">
          Cedarlinks Nigeria, established in 2001 as a Limited Liability Company 
          is a budding facilitating logistics company of note, bringing 
          expediencies into business operations in Nigeria. The company is 
          focused on Immigration consultancy and Logistics services. Our office 
          is located at The Departure Floor, Murtala Muhammed International 
          Airport, Ikeja, Lagos.
        </p>
        
        {/* Vision Accordion */}
        <div className="border-t border-typo pt-3 mt-2">
          <button 
            onClick={() => setIsVisionOpen(!isVisionOpen)} 
            className="flex gap-2 sm:gap-3 items-center w-full text-left"
          >
            <ArrowUp size={24} className="text-blue" />
            <p className="text-lg sm:text-xl text-blue font-medium flex-grow">Our Vision</p>
            {isVisionOpen ? <ChevronUp className="text-blue" /> : <ChevronDown className="text-blue" />}
          </button>
          {isVisionOpen && (
            <p className="mt-3 text-typo text-xs sm:text-sm">
         Cedarlinks Nigeria Limited is committed to excellence, integrity, and efficiency, providing seamless immigration, travel, and security solutions tailored to our clients&apos; needs while ensuring compliance, professionalism, and customer satisfaction.
            </p>
          )}
        </div>
        
        {/* Values Accordion */}
        <div className="border-t border-typo pt-3 mt-2">
          <button 
            onClick={() => setIsValuesOpen(!isValuesOpen)} 
            className="flex gap-2 sm:gap-3 items-center w-full text-left"
          >
            <ArrowRight size={24} className="text-blue" />
            <p className="text-lg sm:text-xl text-blue font-medium flex-grow">Our Values</p>
            {isValuesOpen ? <ChevronUp className="text-blue" /> : <ChevronDown className="text-blue" />}
          </button>
          {isValuesOpen && (
            <div className="mt-3 text-typo text-xs sm:text-sm">
          At Cedarlinks Nigeria Limited, our core values are integrity, efficiency, and customer-centric service, ensuring reliable immigration, travel, and security solutions that prioritize client satisfaction and compliance
            </div>
          )}
        </div>
      </div>
      
      {/* Meet & Greet Services Image Section */}
      <div className="col-span-1 lg:col-span-5 relative py-4 sm:py-6 md:py-10 order-1 lg:order-2">
        <div className="relative overflow-hidden rounded-md border-2 border-amber-500 h-64 sm:h-80 md:h-96">
          <div className="w-full h-full">
            <Image
              src={'/meet.png'}
              width={500}
              height={400}
              alt="Meet and Greet Services"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                Meet & Greet
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
                Services
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}