import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <div className='min-h-[60vh] sm:min-h-[70vh] lg:mb-0 -mb-40 md:h-[80vh] flex flex-col gap-3 sm:gap-4 items-center justify-center text-white bg-about relative px-4 text-center'>
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='relative z-10'>
        <p className='text-goldss text-xs sm:text-sm'>with respect to each customer</p>
        <p className='text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight my-5'>About Us</p>
        <button className='rounded-lg bg-goldss px-4 py-2 mt-2 sm:mt-4 hover:bg-opacity-90 transition-colors text-sm sm:text-base'>
       <Link href={'contact'}>   Contact Us</Link>
        </button>
      </div>
    </div>
  )
}