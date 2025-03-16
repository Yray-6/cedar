// PremiumServices.tsx
import React from 'react';
import { Clock, Award, Target } from 'lucide-react';

const PremiumServices: React.FC = () => {
  const services = [
    {
      icon: <Clock className="w-12 h-12 text-amber-500" />,
      title: "24 Hours Support",
      description: "We support you all hours of the day."
    },
    {
      icon: <Award className="w-12 h-12 text-amber-500" />,
      title: "Qualified Assurance",
      description: "All cars have a valid insurance."
    },
    {
      icon: <Target className="w-12 h-12 text-amber-500" />,
      title: "GPS on Cars",
      description: "All cars are equipped with GPS navigation system."
    }
  ];

  return (
    <div className="bg-primary py-16 lg:mb-0 mb-56 mt-28">
      <div className=" mx-auto">
        <h2 className="lg:text-4xl text-2xl font-bold text-white text-center mb-2">
          Our Premium Services
        </h2>
        <div className="w-56 h-1 bg-goldss mx-auto mb-8"></div>
        
        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
          cedarlinks- is a reputable car rental company that offers a wide range of useful services for every taste.
        </p>
        
        <div className="grid grid-cols-1 absolute mx-[5%] md:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="mb-4 p-2 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-typo-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumServices;