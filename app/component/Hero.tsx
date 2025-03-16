import { Send, ThumbsUp, UserPen } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-hero relative">
      {/* Hero Content */}
      <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 pt-8 md:pt-16 pb-32 md:pb-36">
        <div className="col-span-1 text-white flex flex-col gap-3 md:gap-4 max-w-full">
          <p className="text-[#E5C541] text-base md:text-lg">
            Cedarlinks Solution
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-snug">
            Unlock Your Global Journey with CedarLinks
          </p>
          <p className="text-sm md:text-base">
            Cedar Links Nigeria Limited is an Expatriate Immigration Consultancy
            Services and Logistics Company, servicing a number of reputable
            companies in the oil and gas, construction and conglomerate sector
            in Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 font-semibold py-3">
            <button className="bg-primary px-4 py-2 md:px-5 md:py-3 rounded-xl text-sm md:text-base w-full sm:w-auto">
              Apply Now
            </button>
            <button className="bg-white text-blue px-4 py-2 md:px-5 md:py-3 rounded-xl text-sm md:text-base w-full sm:w-auto">
              About Us
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div
        className="absolute w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] 
                      left-1/2 transform -translate-x-1/2
                      grid grid-cols-1 sm:grid-cols-3  
                      -bottom-[40%] sm:-bottom-[30%] md:-bottom-[20%]"
      >
        {/* Expert Guidance Card */}
        <div
          className="bg-sky-blue flex flex-col gap-3 col-span-1 
                          hover:bg-blue-darker hover:text-white 
                          justify-start items-center py-4 px-4 md:px-6 lg:px-10
                          transition-colors duration-300"
        >
          <UserPen className="text-blue" size={24} />
          <p className="text-lg md:text-xl font-medium">Expert Guidance</p>
          <p className="text-center text-xs md:text-sm hidden md:block">
            Offers expert guidance in immigration consultancy and logistics
            services, ensuring seamless travel and residency solutions.
          </p>
        </div>

        {/* Tailored Solutions Card */}
        <div
          className="bg-sky-blue flex flex-col gap-3 col-span-1 
                          hover:bg-blue-darker hover:text-white 
                          justify-start items-center py-4 px-4 md:px-6 lg:px-10
                          transition-colors duration-300"
        >
          <ThumbsUp className="text-blue" size={24} />
          <p className="text-lg md:text-xl font-medium">Tailored Solutions</p>
          <p className="text-center text-xs md:text-sm hidden md:block">
            Provides tailored solutions for individuals and businesses
            navigating immigration and travel logistics.
          </p>
        </div>

        {/* Streamlined Process Card */}
        <div
          className="bg-sky-blue flex flex-col gap-3 col-span-1 
                          hover:bg-blue-darker hover:text-white 
                          justify-start items-center py-4 px-4 md:px-6 lg:px-10
                          transition-colors duration-300"
        >
          <Send className="text-blue" size={24} />
          <p className="text-lg md:text-xl font-medium">Streamlined Process</p>
          <p className="text-center text-xs md:text-sm hidden md:block">
            From visa assistance and residence permits to quota processing and
            meet-and-greet services, their expert team simplifies complex
            procedures with precision.
          </p>
        </div>
      </div>
    </div>
  );
}
