import { Briefcase, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { LiaLinkedin } from "react-icons/lia";

export default function Footer() {
  return (
    <div className="mt-10 bg-primary py-10 sm:py-12 md:py-16 px-4 sm:px-[5%]">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-10 gap-8 md:gap-4">
        {/* Logo and Contact Section */}
        <div className="sm:col-span-2 lg:col-span-4 flex flex-col gap-4 sm:gap-6">
          <Image src={"/logo.png"} alt="Cedarlinks Logo" width={120} height={100} />
          <div className="text-xs sm:text-sm text-white">
            <p className="flex items-center mb-2 gap-2 sm:gap-4">
              <Briefcase size={16} className="flex-shrink-0" /> Monday - Friday / 8AM to 5PM
            </p>
            <p className="flex items-center gap-2 sm:gap-4">
              <Phone size={16} className="flex-shrink-0" /> +tel:+234 704 224 9988
            </p>
          </div>
          <div className="text-white mt-2 flex gap-2 items-center">
            <div className="p-1.5 sm:p-2 bg-blue rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
              <FaFacebook size={14} />
            </div>
            <div className="p-1.5 sm:p-2 bg-blue rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
              <BsTwitterX size={14} />
            </div>
            <div className="p-1.5 sm:p-2 bg-blue rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
              <LiaLinkedin size={14} />
            </div>
            <div className="p-1.5 sm:p-2 bg-blue rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
              <BsInstagram size={14} />
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-2 sm:gap-3">
          <p className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-3">Navigation</p>
          <p className="text-typo text-sm cursor-pointer hover:text-white transition-colors">Home</p>
          <p className="text-typo text-sm cursor-pointer hover:text-white transition-colors">About Us</p>
          <p className="text-typo text-sm cursor-pointer hover:text-white transition-colors">Our Service</p>
          <p className="text-typo text-sm cursor-pointer hover:text-white transition-colors">Our Teams</p>
        </div>

        {/* Services Links */}
        <div className="sm:col-span-1 lg:col-span-2 flex flex-col gap-2 sm:gap-3">
          <p className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-3">Services</p>
          <p className="text-typo text-sm cursor-pointer hover:text-white transition-colors">Visa Consultation</p>
          <p className="text-typo text-sm cursor-pointer hover:text-white transition-colors">Document Preparation</p>
        </div>

        {/* Help Links */}
        <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-2 sm:gap-3">
          <p className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-3">Help</p>
          <p className="text-typo text-sm cursor-pointer hover:text-white transition-colors">Customer Support</p>
          <p className="text-typo text-sm cursor-pointer hover:text-white transition-colors">Privacy Policy</p>
        </div>
      </div>

      {/* Copyright - Mobile stacked, Desktop inline */}
      <div className="mt-8 sm:mt-10 lg:mt-16 text-center sm:text-left">
        <p className="text-white text-xs sm:text-sm">Copyright ©2024 cedarlinks</p>
      </div>
    </div>
  );
}