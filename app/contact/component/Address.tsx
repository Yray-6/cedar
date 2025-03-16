import { LocateIcon, MailIcon, MapPin } from 'lucide-react'
import React from 'react'

export default function Address() {
  return (
    <div className='bg-[#F1F4FF] py-8 sm:py-10 px-4 sm:px-6 md:px-[5%]'>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-6 lg:gap-10'>
        {/* First location */}
        <div className='w-full'>
          <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>MURITALA MUHAMMED AIRPORT</p>
          <p className='py-4 sm:py-6 md:py-8 text-typo w-full sm:w-[80%] md:w-[70%] lg:w-[50%] text-sm md:text-base'>
            We operate at the lagos inernational airport, room 1052, old terminal where our head office is located
          </p>
          <div className='space-y-2 md:space-y-3'>
            <p className='font-semibold flex items-center gap-2 text-sm md:text-base'> 
              <MapPin className='flex-shrink-0' size={18}/> 
              <span>Room 1052, old terminal airport</span>
            </p>
            <p className='font-semibold flex items-center gap-2 text-sm md:text-base'> 
              <MailIcon className='flex-shrink-0' size={18}/> 
              <span>info@cedarlinks.com</span>
            </p>
          </div>
        </div>
        
        {/* Second location */}
        <div className='w-full mt-8 md:mt-0'>
          <p className='text-xl sm:text-2xl md:text-3xl font-semibold'>MARYLAND</p>
          <p className='py-4 sm:py-6 md:py-8 text-typo w-full sm:w-[80%] md:w-[70%] lg:w-[50%] text-sm md:text-base'>
            Behind maryland shopping complex.
          </p>
          <div className='space-y-2 md:space-y-3'>
            <p className='font-semibold flex items-center gap-2 text-sm md:text-base'> 
              <MapPin className='flex-shrink-0' size={18}/> 
              <span>Plot 6, Okupe estate ikorodu road, Lagos</span>
            </p>
            <p className='font-semibold flex items-center gap-2 text-sm md:text-base'> 
              <MailIcon className='flex-shrink-0' size={18}/> 
              <span>info@cedarlinks.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}