/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Maeque from './components/Maeque'
import About from './components/About'
import Eyes from './components/Eyes'
import Features from './components/Features'
import Card from './components/Card'
import Ready from './components/Ready'
import Footers from './components/Footers'
import Lastfoot from './components/Lastfoot'
import LocomotiveScroll from 'locomotive-scroll';




function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className=' w-full min-h-screen bg-[#F1F1F1] text-black'>
      <Navbar/>
      <LandingPage/>
      <Maeque/>
      <About/>
      <Eyes/>
      <Features/>
      <Card/>
      <Ready/>
      <Footers/>
      <Lastfoot/>
    </div>
  )
}

export default App