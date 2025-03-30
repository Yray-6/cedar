import React from 'react';
import Image from 'next/image';

const LoadingPage = ({ text = 'Loading...' }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="flex flex-col items-center">
        {/* Replace "/logo.png" with the path to your logo */}
        <div className="relative w-24 h-24 mb-4">
          <Image
            src="/logo.png"
            alt="Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <p className="text-white text-lg font-medium mt-4">{text}</p>
      </div>
    </div>
  );
};

export default LoadingPage;