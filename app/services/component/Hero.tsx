import React from "react";

export default function Hero() {
  return (
    <div className="h-[80vh] flex flex-col gap-4 items-center justify-center relative text-white bg-services">
           <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <p className="text-5xl relative z-10 font-semibold">Our Services</p>
    </div>
  );
}
