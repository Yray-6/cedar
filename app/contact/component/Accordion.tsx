"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// Define types for our accordion items
interface AccordionItem {
  title: string;
  content: string;
}

const Accordion: React.FC = () => {
  // State to track which accordion item is open
  const [openItem, setOpenItem] = useState<number | null>(null);

  // Toggle function to handle opening/closing accordion items
  const toggleItem = (index: number): void => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  // Accordion data
  const accordionItems: AccordionItem[] = [
    {
      title: "What Services Does cedar links Offer?",
      content:
        "Cedarlinks Nigeria Limited offers immigration advisory, expatriate quota processing, visa facilitation (including TWP, business, tourist, and STR visas), residence permit processing (CERPAC), meet and greet services, car rental with optional armed escort, and mobile security services, ensuring seamless travel and relocation support for clients in Nigeria.",
    },
    {
      title: "How Much Does cedar link Services Cost?",
      content:
        "Yes, we provide professional armed escort services for enhanced security.",
    },
    {
      title: "What Happens if My Visa Application is Denied?",
      content:
        "Yes, we provide meet and greet services for VIPs, first-time visitors, and regular travelers to ensure smooth airport arrivals and departures.",
    },
    {
      title: "What Types of Visas Does cedar Assist With?",
      content:
        "Yes, we assist companies in applying for and renewing expatriate quotas, including rendering returns to the Nigerian Immigration Service.",
    },
  ];

  return (
    <div className="mx-4 sm:mx-6 md:mx-[5%] my-10 sm:my-16 md:my-20 bg-white p-4 sm:p-6 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Image section - Hidden on small screens, visible on medium and up */}
        <div className="w-full md:w-2/5">
          <Image
            src="/accordion-img.svg"
            alt="Professional in business attire"
            className="w-full h-auto rounded-lg shadow-md"
            height={500}
            width={1000}
            priority
          />
        </div>

        {/* Content section */}
        <div className="w-full md:w-3/5">
          <div className="mb-6 sm:mb-8 md:mb-10">
            <p className="text-goldss text-sm sm:text-base mb-3 sm:mb-4 md:mb-5">
              Frequently Ask Question
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-5 md:mb-6 leading-tight">
              Everything You Need to Know About CedarLinks
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              At nullam leo consectetur euismod enim. Orci donec sapien et
              semper fringilla pellentesque in diam mi. Pulvinar ante sed velit
              ac nibh. Amet duis orci nibh nullam. Phasellus suspendisse ornare
              arcu eu orci urna justo.
            </p>
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-2 sm:pb-3 md:pb-4"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center w-full text-left py-3 sm:py-4"
                >
                  <div className="flex items-center pr-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-navy-800">
                      {item.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`flex-shrink-0 transition-transform duration-300 ${
                      openItem === index ? "transform rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openItem === index
                      ? "max-h-96 opacity-100 py-2 sm:py-3 md:py-4"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-typo text-sm pl-0 sm:pl-4 md:pl-10">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
