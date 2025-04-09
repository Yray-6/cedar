import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Team() {
  // Team members data array
  const teamMembers = [
    { 
      id: 1, 
      image: "/soji.svg", 
      name: "Soji AJIBODE", 
      role: "MD/CEO",
      isLeader: true,
      profileLink: "/about/ceo"  // Assuming you have a profile page route
    },
    { id: 2, image: "/joseph.svg", name: "Joseph Abiodun Obalade", role: "ADMIN/HR MANAGER" },
    { id: 3, image: "/nnamdi3.svg", name: "Nnamdi Obike NATHANIEL", role: "Logistics cordinator (I)" },
    { id: 4, image: "/emmanuel4.svg", name: "Emmanuel A. AWOTORUVWE", role: "Logistics Coordinator (I)" },
    { id: 7, image: "/michael.svg", name: "Michael O. OLATUNJI", role: " Business Executive" },
    { id: 6, image: "/abdul.svg", name: "Abdulwasiu Olalekan BANKOLE", role: "Logistics Coordinator (II)" },
    { id: 13, image: "/olufemi.svg", name: "Oladipupo Olufemi OLAKUNLE", role: "Logistics Coordinator (II)" },
    { id: 11, image: "/nathaniel.svg", name: "Ahmed Lanre SHOLEYE", role: "CHAUFFUER" },
    { id: 10, image: "/sunday.svg", name: "Sunday Olatubosun AMINU", role: "CHAUFFUER" },
    { id: 8, image: "/moses.svg", name: "Moses OGUNTOLA", role: "CHAUFFUER" },
    { id: 9, image: "/ifeoluwa.svg", name: "Ifeoluwa Olatubosun OLANIHUN", role: "CHAUFFUER" },
    { id: 12, image: "/ahmed.svg", name: "Hamed Oluwafemi ADISA", role: "CHAUFFUER" },

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
           <Link href={'/contact'}>Join Us</Link> 
          </button>
        </div>
      </div>
      
      {/* Featured Leader (MD/CEO) */}
      <div className="mt-8 sm:mt-12">
        <Link href={teamMembers[0].profileLink || ""} className="block">
          <div className="relative bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden max-w-3xl mx-auto border-2 border-primary">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-[300px] sm:h-[350px] relative overflow-hidden">
                <Image
                  src={teamMembers[0].image}
                  alt={`Team leader - ${teamMembers[0].name}`}
                  width={800}
                  height={800}
                  className="object-contain w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Leadership
                </div>
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-primary">{teamMembers[0].name}</h3>
                <p className="text-lg font-semibold text-primary/80 mb-4">{teamMembers[0].role}</p>
                <p className="text-gray-700 mb-6">
                  As the Managing Director and CEO, {teamMembers[0].name.split(" ")[0]} leads our team with vision and expertise in security and logistics.
                </p>
                <div className="flex items-center text-primary font-semibold">
                  <span>View Full Profile</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary"></div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
      {/* Other Team Members Grid */}
      <h3 className="text-xl font-semibold text-primary mt-12 mb-6">Our Team Members</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-primary text-center gap-4 sm:gap-5">
        {teamMembers.slice(1).map((member) => (
          <div key={member.id} className="flex flex-col col-span-1 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="h-[200px] sm:h-[220px] overflow-hidden">
              <Image
                src={member.image}
                alt={`Team member - ${member.name}`}
                width={800}
                height={400}
                className="object-contain w-full h-full"
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