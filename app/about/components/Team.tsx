import Image from "next/image";
import React from "react";

export default function Team() {
  // Team members data array
  const teamMembers = [
    { id: 1, image: "/service-66.svg", name: "Moses Oguntola", role: "CHAUFFUER" },
    { id: 2, image: "/service-8.svg", name: "Ifeoluwa O. Olanihun", role: "CHAUFFUER" },
    { id: 3, image: "/service-44.svg", name: "Ahmed O Adisa", role: "CHAUFFUER" },
    { id: 4, image: "/service-33.svg", name: "Emmanuel A. AWOTORUVWE", role: "Logistics Coordinator (I)" },
    { id: 5, image: "/service-22.svg", name: "Nathaniel N. OBIKE", role: "Logistics Coordinator (I)" },
    { id: 6, image: "/service-11.svg", name: "Joseph A. OBALADE", role: "Admin/HR Manager" },
    { id: 7, image: "/service-7.svg", name: "Michael O. OLATUNJI", role: " Business Executive" },
    { id: 8, image: "/servicce-5.svg", name: "Hamed Lanre SHOLEYE", role: "Immigration" },
    { id: 9, image: "/service-9.svg", name: "Olufemi O. OLAKUNLE,", role: "Logistics Coordinator (I)" },
  ];

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-[10%]">
      {/* Header Section */}
      <p className="text-primary font-medium text-sm sm:text-base uppercase tracking-wider">OUR TEAM</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4">
        <div className="flex flex-col col-span-1 gap-3 sm:gap-4">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">The CedarLinks Family</p>
          <p className="text-sm sm:text-base text-gray-700">
            Our team is composed of experienced professionals specializing in
            security, logistics, and immigration consultancy. Their security
            personnel, including trained armed escorts and mobile police
            (Mopol), ensure safe transit for clients
          </p>
        </div>
        <div className="col-span-1 flex items-start sm:justify-end mt-4 sm:mt-0">
          <button className="bg-primary py-2 px-6 text-white rounded hover:bg-opacity-90 transition-colors">
            Join Us
          </button>
        </div>
      </div>
      
      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-primary text-center pt-8 sm:pt-12 gap-4 sm:gap-5">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col col-span-1 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden">
              <Image
                src={member.image}
                alt={`Team member - ${member.name}`}
                width={800}
                height={400}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div className="bg-sky-blue px-5 py-4">
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm text-primary/80">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}