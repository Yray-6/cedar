import Footer from '@/app/component/Footer'
import Navbar from '@/app/component/Navbar'
import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <Navbar/>
      
      <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image Column */}
          <div className="col-span-1">
            <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
              <Image
                src="/soji.svg" 
                alt="Soji Ajibode - MD/CEO"
                width={500}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Soji Ajibode</h1>
            <p className="text-xl text-primary/80 font-medium mb-8">MD/CEO.</p>
            
            <div className="space-y-6 text-gray-800">
              <p>
                Born on 13th August, 1961, Adesoji Ajibode is an indigene of 
                Isheri-Oke in Lagos State and a graduate of English, Linguistics 
                and Education from the University of Ilorin with Second Class 
                Honours, Upper Division in 1988. He joined the Nigerian 
                Immigration Service in 1990 and won the National Overall Best 
                Immigration Officer Award for the 24th Basic course. In the course 
                of the service, he has had the privilege to serve in different 
                capacities at various commands in different states of the 
                Federation. These include Ogun, Adamawa, Borno, Akwa-Ibom, 
                Delta and Lagos Commands.
              </p>
              
              <p>
                In the year 2005 after 16years of service, Adesoji resigned from the 
                Nigerian Immigration Service as a Superintendent and 
                established a private firm, running Immigration Consultancy and 
                Logistics Services for Expatriates in Oil & Gas, Construction and 
                Manufacturing concerns as well as conglomerates. With 25 years 
                of cognate experience in public and private service, he is today 
                the Managing Director of Cedar Links Nigeria Limited.
              </p>
              
              <p>
                A multi-tasking and eclectic personage, Adesoji Ajibode is also a 
                prolific writer and motivational speaker who is focused on 
                nourishing the soul and provoking subliminal transformation in 
                our youths towards making them the gems they are meant to be.
              </p>
              
              <p>
                He is married with 3 children and resides in Lagos, Nigeria.
              </p>
            </div>
            
           
          </div>
        </div>
        
        {/* Horizontal Divider */}
        <div className="my-16 w-full h-px bg-gray-300 max-w-4xl mx-auto"></div>
      </div>
      
      <Footer/>
    </div>
  )
}