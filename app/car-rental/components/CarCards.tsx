// components/CarCard.tsx
import Image from 'next/image';
import { Car } from '@/app/types';

interface CarCardProps {
  car: Car;
  onBookNow: (car: Car) => void;
}

export default function CarCard({ car, onBookNow }: CarCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48 w-full">
        <Image 
          src={car.image} 
          alt={car.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold">{car.name}</h3>
        
        <div className="flex items-center gap-4 my-2">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
            <span>{car.seats}</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
            </svg>
            <span>{car.fuelType}</span>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <span>{car.type}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-600">Daily rate from</p>
          <p className="text-2xl font-bold">${car.dailyRate}</p>
        </div>
        
        <button 
          onClick={() => onBookNow(car)}
          className="mt-4 w-full bg-goldss hover:bg-amber-600 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}
