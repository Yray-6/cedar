'use client'
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-goldss py-2 text-sm px-[5%] hidden md:flex font-semibold gap-2 text-primary">
        <Phone />
        <p>Need Quick Response? Call US +tel:+234 803 304 1250</p>
      </div>
      <div className="bg-primary flex items-center py-2 justify-between px-[5%]">
        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-16 items-center pr-[5%]">
          <div className="flex gap-8 text-white">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About us</Link>
            <Link href={"/services"}>Services</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
          <div>
            <Link href={'/car-rental'}> 
              <button className="bg-white text-blue px-4 py-2 rounded-xl">Let's Talk</button>
            </Link>
          </div>
        </div>
        
        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - Full Screen Slide-in from Right */}
      <div className={`fixed top-0 right-0 h-full w-full bg-primary text-white transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {isMenuOpen && (
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b border-white/20">
              <Image src={"/logo.png"} alt="logo" width={100} height={100} />
              <button onClick={toggleMenu} className="text-white">
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col mt-8 px-5 gap-8 flex-grow text-xl">
              <Link href={"/"} onClick={toggleMenu}>Home</Link>
              <Link href={"/about"} onClick={toggleMenu}>About us</Link>
              <Link href={"/services"} onClick={toggleMenu}>Services</Link>
              <Link href={"/contact"} onClick={toggleMenu}>Contact Us</Link>
              <Link href={'/car-rental'} onClick={toggleMenu}> 
                <button className="bg-white text-blue px-6 py-3 rounded-xl mt-4 font-semibold">Let's Talk</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}