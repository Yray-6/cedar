// StatsCounter.tsx
import React from 'react';

interface StatItemProps {
  count: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ count, label }) => {
  return (
    <div className="text-center">
      <h3 className="text-4xl md:text-5xl font-semibold mb-2">{count}</h3>
      <p className="text-lg md:text-xl">{label}</p>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  const stats = [
    { count: "50+", label: "Cars For Rent" },
    { count: "200+", label: "Happy Clients" },
    { count: "200+", label: "Rental Locations" },
  ];

  return (
    <div className="bg-goldss py-12 lg:mt-72 mt-[600px] md:py-8">
      <div className=" mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index} 
              count={stat.count} 
              label={stat.label} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsCounter;