import Image from "next/image";
import React from "react";

export default function Enjoy() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 my-4 sm:my-6 py-8 sm:py-12">
      {/* Left Section with Text */}
      <div className="col-span-1 lg:col-span-5 relative py-8 sm:py-16 px-4 sm:px-8 lg:pl-[10%] xl:pl-[20%] flex items-center bg-primary">
        <div className="bg-black/25 text-white p-4 sm:p-6 relative lg:-right-16 w-full lg:w-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Enjoy your life with our comfortable cars.
          </p>
          <p className="my-3 sm:my-5 text-sm sm:text-base">
            Cedarlinks is ready to serve the best experience in car rental.
          </p>
          <button className="text-black py-2 px-5 sm:px-7 text-sm sm:text-base rounded bg-goldss hover:bg-opacity-90 transition-colors duration-300">
            Rent Now
          </button>
        </div>
      </div>
      
      {/* Right Section with Car Image */}
      <div className="col-span-1 lg:col-span-5 flex items-center justify-center py-4 sm:my-10 bg-white">
        <div className="w-full px-4 lg:px-0">
          <Image 
            src={'/main-car.svg'} 
            width={1000} 
            height={400} 
            alt="Luxury car rental" 
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}