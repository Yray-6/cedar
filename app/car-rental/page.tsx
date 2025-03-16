import React from 'react'
import Navbar from '../component/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'
import PremiumServices from './components/Premium'
import StatsCounter from './components/StatsCounter'
import Footer from '../component/Footer'
import ContactForm from './components/ContactForm'

export default function page() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Main/>
        <PremiumServices/>
        <StatsCounter/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}
