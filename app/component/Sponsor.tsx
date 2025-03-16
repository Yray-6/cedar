import Image from 'next/image'
import React from 'react'

export default function Sponsor() {
  // Group sponsors into rows for easier mapping
  const sponsorRows = [
    [
      { src: '/sponsor1.svg', width: 150 },
      { src: '/sponsor2.png', width: 200 },
      { src: '/sponsor3.png', width: 200 },
      { src: '/sponsor4.png', width: 200 },
      { src: '/sponsor5.png', width: 150 },
    ],
    [
      { src: '/sponsor6.png', width: 150 },
      { src: '/sponsor7.png', width: 200 },
      { src: '/sponsor8.png', width: 200 },
      { src: '/sponsor9.png', width: 200 },
      { src: '/sponsor10.png', width: 100 },
    ],
    [
      { src: '/sponsor11.png', width: 100 },
      { src: '/sponsor12.png', width: 200 },
      { src: '/sponsor13.png', width: 70 },
      { src: '/sponsor14.png', width: 100 },
      { src: '/sponsor15.png', width: 100 },
      { src: '/sponsor16.png', width: 100 },
      { src: '/sponsor17.png', width: 100 },
    ],
    [
      { src: '/sponsor18.png', width: 150 },
      { src: '/sponsor23.png', width: 50 },
      { src: '/sponsor19.png', width: 120 },
      { src: '/sponsor20.png', width: 200 },
      { src: '/sponsor21.png', width: 80 },
      { src: '/sponsor22.png', width: 150 },
    ],
  ];

  return (
    <div className='bg-goldss py-6 sm:py-8 md:py-10 px-4 sm:px-[5%]'>
      <h2 className='text-center text-xl sm:text-2xl font-semibold mb-4 md:mb-6 text-primary'>Our Partners</h2>
      
      {/* Responsive layout for desktop screens */}
      <div className='hidden md:block'>
        {sponsorRows.map((row, rowIndex) => (
          <div key={rowIndex} className='flex flex-wrap justify-between items-center py-2 md:py-3'>
            {row.map((sponsor, index) => (
              <div key={index} className='mx-2 my-2'>
                <Image 
                  src={sponsor.src} 
                  alt={`Partner ${rowIndex * 10 + index + 1}`} 
                  width={sponsor.width} 
                  height={100} 
                  className='object-contain h-12 sm:h-16'
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Responsive grid for mobile and tablet */}
      <div className='md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6'>
        {sponsorRows.flat().map((sponsor, index) => (
          <div key={index} className='flex items-center justify-center bg-white/10 rounded p-3 h-20'>
            <Image 
              src={sponsor.src} 
              alt={`Partner ${index + 1}`} 
              width={sponsor.width} 
              height={100} 
              className='object-contain max-h-16'
            />
          </div>
        ))}
      </div>
    </div>
  )
}