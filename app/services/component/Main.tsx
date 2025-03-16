import React from "react";

// Define TypeScript interfaces for our data structure
interface VisaService {
  id: string;
  title: string;
  buttonText: string;
  mainImage: string;
  altText: string;
  descriptionTitle: string;
  descriptionParagraphs: string[];
  servicesTitle?: string;
  leftColumnServices?: string[];
  rightColumnServices?: string[] | null;
}

// Sample data array that can be easily expanded
const visaServicesData: VisaService[] = [
  {
    id: "expatriate-visa",
    title: "Visa",
    buttonText: "Apply Now",
    mainImage: "/visa-service.svg",
    altText: "Passports being held",
    descriptionTitle: "Description",
    descriptionParagraphs: [
      "We assess your immigration needs and status depending on your request and tailor specific actions that will meet your unique & special needs.",
      "We assist our clients to process visas including Temporary Work Permit ( TWP ) for non expatriates with short stay.",
    ],
    servicesTitle: "EXPATRIATE VISA SERVICES",
    leftColumnServices: [
      "short visa",
      "business visa",
      "Tourist visa",
      "Visa On Arrival",
    ],
    rightColumnServices: ["STR visa", "TWP visa"],
  },
  {
    id: "advisory",
    title: "Immigration advisory",
    buttonText: "Call us",
    mainImage: "/advisoryy.svg",
    altText: "Passports being held",
    descriptionTitle: "Description",
    descriptionParagraphs: [
      "We assess your immigration needs and status depending on your request and tailor specific actions that will meet your unique & special needs.",
      "Cedarlinks Nigeria Limited offers immigration advisory services, providing clients with expert assistance in visa applications, work permits, and residency processes. Their team ensures compliance with immigration laws, simplifies documentation procedures, and offers tailored solutions for individuals and corporate clients seeking to travel or relocate internationally.",
    ],
    servicesTitle: "We offer adversories on ",
    leftColumnServices: [
      "Visa and Residency Applications – Helping clients apply for work, study, family, or business visas.",
      "Compliance & Legal Advice – Ensuring businesses and individuals comply with immigration laws and policies.",
      "Citizenship Applications – Assisting with naturalization and citizenship procedures.",
      "Asylum & Refugee Applications – Supporting individuals seeking asylum or refugee status.",
    ],
    rightColumnServices: null,
  },
  {
    id: "expatriate-visa",
    title: "Quota processing",
    buttonText: "Contact Us",
    mainImage: "/quota.png",
    altText: "Passports being held",
    descriptionTitle: "Description",
    descriptionParagraphs: [
      "The establishment Grant for Quota position is sine-qua-non for doing business that requires the services of expatriates",
      "Cedarlinks Nigeria Limited provides quota processing services, assisting businesses in securing expatriate quotas, renewal applications, and regulatory compliance. Their expertise ensures a smooth and efficient approval process, enabling companies to legally employ skilled foreign professionals while adhering to Nigerian immigration laws.",
    ],
    servicesTitle: "Our team will assist you to:",
    leftColumnServices: [
      "Process your company's expatriate quota",
      "Render returns to the Nigerian Immigration service (NIS)",
      "Renew your expired quota",
      "De-tag the tagged ones.",
    ],
    rightColumnServices: null,
  },
  {
    id: "armed",
    title: "Armed escort",
    buttonText: "Contact Us",
    mainImage: "/armedd.svg",
    altText: "Passports being held",
    descriptionTitle: "Description",
    descriptionParagraphs: [
      "Cedarlinks Nigeria Limited offers armed escort services, deploying professional security personnel, including mobile police (Mopol), to ensure the safety of clients. Their escort teams provide protection against potential threats, ensuring a secure and smooth journey for individuals and businesses in need of high-level security solutions.",
    ],
  },
  {
    id: "meet",
    title: "Meet and Greet",
    buttonText: "Apply Now",
    mainImage: "/meet-greet.svg",
    altText: "Passports being held",
    descriptionTitle: "Description",
    descriptionParagraphs: [
      "Our Meet and Greet team will welcome your VIP, regular and first time visitors to Nigeria on arrival and chaperon them through the controls at departure.",
      "Our Meet and Greet Team is responsible for welcoming and assisting guests, clients, or travelers at events, airports, hotels, or corporate locations. Their main goal is to provide a smooth and pleasant arrival experience.",
    ],
    servicesTitle: "EXPATRIATE VISA SERVICES",
    leftColumnServices: [
      "Airport Meet & Greet – Assisting travelers with luggage, immigration, and transfers.",
      "Corporate Assistance – Greeting VIP clients, escorting them to meetings, and providing necessary information.",
      "Customer Support – Offering directions, answering questions, and resolving guest concerns.",
    ],
  },
  {
    id: "car-rental",
    title: "Car rental",
    buttonText: "Apply Now",
    mainImage: "/car-rental.png",
    altText: "Passports being held",
    descriptionTitle: "Description",
    descriptionParagraphs: [
      "We offer Vehicle transportation based on your request and also provide mobile security service (MopolEscort) on request.",
      "We provide vehicles for temporary use in exchange for a fee. These services cater to different needs, including short-term rentals for tourists, long-term leasing for businesses, and luxury rentals for special occasions.",
    ],
    servicesTitle: "EXPATRIATE VISA SERVICES",
    leftColumnServices: [
      "Self-Drive Rentals – Customers rent a car to drive themselves.",
      "Chauffeur-Driven Rentals – A professional driver is provided with the car.",
      "Luxury & Exotic Car Rentals – High-end vehicles for special events or VIP clients.",
      "Airport Transfers – Pickup and drop-off services at airports.",
    ],
  },
  {
    id: "crew-change",
    title: "CREW CHANGE AND PERSONNEL MANAGEMENT",
    buttonText: "Apply Now",
    mainImage: "/crew-change.svg",
    altText: "Passports being held",
    descriptionTitle: "Description",
    descriptionParagraphs: [
      "We can assist in the recruitment of crew members for clients.",
    ],
  },
];

// Responsive component to render the visa services from the data array
const VisaServicesPage: React.FC = () => {
  return (
    <div className="w-full max-w-6xl py-6 sm:py-10 px-4 sm:px-6 md:px-8 mx-auto space-y-12 sm:space-y-16">
      {visaServicesData.map((service) => (
        <div key={service.id} className="visa-service-section">
          {/* Header Section - Made responsive with flex-wrap */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-6 sm:mb-8 gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {service.title}
            </h1>
            <button className="bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded font-medium hover:bg-navy-900 transition-colors duration-200 w-full sm:w-auto">
              {service.buttonText}
            </button>
          </div>

          {/* Content Section - Stack on mobile, side by side on larger screens */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Image Column - Full width on mobile, partial on larger screens */}
            <div className="w-full md:w-2/5">
              <img
                src={service.mainImage}
                alt={service.altText}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>

            {/* Text Content Column */}
            <div className="w-full md:w-3/5 mt-6 md:mt-0">
              {/* Description Section */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">
                  {service.descriptionTitle}
                </h2>
                {service.descriptionParagraphs.map((paragraph, index) => (
                  <p key={index} className="text-sm text-typo mb-3 sm:mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Services Section - Only show if there are services to display */}
              {service.servicesTitle && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
                    {service.servicesTitle}
                  </h2>
                  <div className="flex flex-col sm:flex-row text-typo text-sm gap-6 sm:gap-8">
                    {/* Left Column */}
                    {service.leftColumnServices && (
                      <ul className="list-disc pl-5 space-y-2 flex-1">
                        {service.leftColumnServices.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}

                    {/* Right Column */}
                    {service.rightColumnServices && (
                      <ul className="list-disc pl-5 space-y-2 flex-1">
                        {service.rightColumnServices.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisaServicesPage;