import React from 'react'
import Navbar from '../component/Navbar'
import Hero from './components/Hero'
import About from '../component/About'
import Story from './components/Story'
import Footer from '../component/Footer'
import Team from './components/Team'

export default function page() {
  return (
    <div>
        <Navbar/>
         <Hero/>
        <About/>
        <Story/>
        <Team/>
        <Footer/> 
    </div>
  )
}
