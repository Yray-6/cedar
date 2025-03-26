import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function OurService() {
  // Service data array to avoid repetition
  const services = [
    { image: "/service-1.svg", title: "Immigration" },
    { image: "/service-2.svg", title: "Quota Processing" },
    { image: "/hero.svg", title: "Residence Permit" },
    { image: "/service-4.svg", title: "Immigration" },
    { image: "/service-5.svg", title: "Quota Processing" },
    { image: "/service-6.svg", title: "Residence Permit" },
  ];

  return (
    <div className="bg-primary pt-8 sm:pt-12 md:pt-16 pb-8 sm:pb-12">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-10 text-white px-4">
        <p className="text-goldss text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 font-bold">
          Our Service
        </p>
        <p className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">
          CedarLinks Nigeria Limited
        </p>
        <p className="text-sm sm:text-base">
          At Cedar Links, we offer Immigration and integrated Services, some of
          which are:-
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white pt-6 sm:pt-12 pb-3 sm:pb-5 gap-4 sm:gap-5 px-4 sm:px-[5%] md:px-[10%]">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col mb-4">
            <div className="h-[180px] sm:h-[200px] md:h-[230px] object-cover">
              <Image
                src={service.image}
                alt={`Service ${index + 1}`}
                width={800}
                height={400}
                className="object-cover w-full h-full rounded-t-sm"
              />
            </div>
            <Link href={"/services"}>
              {" "}
              <div className="flex bg-goldss justify-between items-center px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base rounded-b-sm">
                {service.title}
                <ArrowRight size={20} className="text-primary" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
