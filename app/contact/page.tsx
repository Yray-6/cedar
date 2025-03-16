import React from 'react'
import Navbar from '../component/Navbar'
import Hero from './component/Hero'
import GetInTouch from './component/GetInTouch'
import Address from './component/Address'
import StatsSection from './component/StatsSection'
import Accordion from './component/Accordion'
import Footer from '../component/Footer'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <GetInTouch/>
       <Address/>
        <StatsSection/>
          <Accordion/>
        <Footer/>
    </div>
  )
}
