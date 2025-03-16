import React from 'react'
import Navbar from '../component/Navbar'
import Hero from './component/Hero'
import VisaServices from './component/Main'
import Footer from '../component/Footer'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <VisaServices/>
        <Footer/>
    </div>
  )
}
