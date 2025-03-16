import React from 'react'

export default function Hero() {
  return (
    <div className='relative bg-rental h-[70vh]'>
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      
      {/* Content */}
      <div className='relative z-10 text-white lg:text-left text-center h-full flex justify-center flex-col px-[10%]'>
        <p className='lg:text-4xl text-3xl  font-semibold'>Indulge in the art of refined travel with our exquisitely comfortable cars.</p>
        <p className='mt-5 text-lg'>Carent, is ready to serve the best experience in car rental.</p>
      </div>
    </div>
  )
}