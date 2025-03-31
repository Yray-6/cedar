// StatsSection.jsx
import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '15+', label: 'Years of Experience' },
    { value: '93%', label: 'Success Rate' },
    { value: '2X', label: 'Faster Process' },
    { value: '11K', label: 'Successful Applications' },
  ];

  return (
    <div className="w-full bg-primary py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-[5%]">
      <div className="max-w-7xl mx-auto">
        <div className="text-goldss font-semibold text-sm sm:text-base mb-2 sm:mb-3">CEDARLINKS STAT</div>
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 md:mb-0 leading-tight">
              The Numbers Speak
            </h2>
          </div>
          
          <div className="w-full md:w-1/2">
            <p className="text-gray-400 text-sm sm:text-base">
            At Cedarlinks Nigeria Limited, our track record speaks for itself. With over 20 years of experience, we have successfully processed thousands of visas, and expatriate quotas, ensuring seamless travel and relocation for individuals and businesses
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 gap-y-8 gap-x-4 sm:gap-x-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;