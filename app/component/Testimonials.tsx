import Image from 'next/image'
import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      image: '/emeka.png',
      name: 'Emeka N.',
      text: '"Cedar Links exceeded my expectations! Their team guided me through the quota approval process effortlessly, ensuring compliance and a quick turnaround."'
    },
    {
      image: '/kristin.png',
      name: 'Kristin Watson',
      text: '"I rented a car for a one-week trip from Cedarlinks on the recommendation of my friend. Actually, I am satisfied with them."'
    },
    {
      image: '/fox.png',
      name: 'Robert Fox',
      text: '"During my last trip, I used a Carent sport car. The car was completely clean and had enough gas."'
    }
  ];

  return (
    <div className='text-center py-8 sm:py-12 md:py-16 px-4'>
      <p className='text-center text-2xl sm:text-3xl md:text-4xl border-b-2 inline border-goldss pb-1'>
        What Our Clients Say?
      </p>
      
      <div className='py-8 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-[5%] md:px-[10%] gap-4 sm:gap-5'>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className='col-span-1 flex flex-col p-4 sm:p-5 items-center justify-between gap-3 sm:gap-5 border rounded shadow-sm hover:shadow-md transition-shadow duration-300'
          >
            <div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 relative rounded-full overflow-hidden'>
              <Image 
                src={testimonial.image} 
                alt={testimonial.name} 
                width={100} 
                height={100}
                className='object-cover'
              />
            </div>
            
            <p className='text-lg sm:text-xl font-semibold'>{testimonial.name}</p>
            
            <p className='text-typo text-xs sm:text-sm'>{testimonial.text}</p>
            
            <div className='flex gap-1 mt-2'>
              {[...Array(5)].map((_, i) => (
                <Image key={i} src='/star.svg' alt='star rating' width={16} height={16} className='w-4 h-4 sm:w-5 sm:h-5' />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}