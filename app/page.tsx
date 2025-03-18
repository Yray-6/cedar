import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Enjoy from "./component/Enjoy";
import OurService from "./component/OurService";
import Testimonials from "./component/Testimonials";
import Sponsor from "./component/Sponsor";
import Footer from "./component/Footer";

export default function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Enjoy />
      <OurService />
      <Testimonials />
      <Sponsor />
      <Footer />
    </div>
  );
}
