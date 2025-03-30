'use client'

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from 'next/link';

type ServiceCardProps = {
  title: string;
  description: string;
  readMoreLink: string;
}

// Card component for reusability
const ServiceCard = ({ title, description, readMoreLink }: ServiceCardProps) => (
  <div className="bg-white p-6 rounded shadow-md h-[250px] flex flex-col">
    <h3 className="font-semibold text-lg mb-3">{title}</h3>
    <p className="text-typo mb-4 text-sm flex-grow">{description}</p>
    <Link href={readMoreLink} className="text-blue-500 hover:underline mt-auto">
      Find Out More
    </Link>
  </div>
);

export default function Story() {
  // Add custom styles to fix overflow issues
  useEffect(() => {
    // Add custom CSS to handle overflow
    const style = document.createElement('style');
    style.innerHTML = `
      .slider-container .slick-slide {
        padding: 0 8px;
      }
      .slider-container .slick-list {
        margin: 0 -8px;
        overflow: visible;
      }
      .slider-container .slick-track {
        display: flex !important;
      }
      .slider-container .slick-slide > div {
        height: 100%;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  // Sample data for the cards
  const services = [
    {
      title: "Visa processing",
      description: "We assist our clients to process visas including Temporary Work Permit (TWP) for nonresident expatriates with short stay",
      link: "/contact"
    },
    {
      title: "Residence permit",
      description: "We can assist to process Company's Combined Expatriate Residence Permit and Aliens Card (CERPAC), which is an obligation for expatriates on Subject To Regularisation (STR) Visa. We also renew expired CERPAC",
      link: "/contact"
    },
    {
      title: "Armed escort",
      description: "Cedarlinks Nigeria Limited offers armed escort services to ensure the safety of individuals and assets during transit.",
      link: "/contact"
    },
    {
      title: "Processing",
      description: "Grant for Quota line-qua-non for doing business with international flavour",
      link: "/contact"
    }
  ];

  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-amber-100 my-10 py-12">
      <div className="container mx-auto px-4">
        <div className="gap-5 flex flex-col text-center mb-10">
          <p className="text-gray-600">Our Story</p>
          <p className="lg:text-4xl text-3xl font-semibold">WHAT WE DO</p>
          <p className="text-gray-700">At Cedar Links, we offer Immigration and integrated Services.</p>
        </div>
        
        <div className="mt-8 overflow-hidden">
          {/* Add custom class for slider container */}
          <div className="slider-container">
            <Slider {...settings}>
              {services.map((service, index) => (
                <div key={index} className="px-2">
                  <ServiceCard 
                    title={service.title}
                    description={service.description}
                    readMoreLink={service.link}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}