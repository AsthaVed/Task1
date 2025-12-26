import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Section3 from './components/Section3'
import Challenges from './components/Challenges'
import Steps from './components/Steps'
import About from './components/About'
import LinkedInSolutions from './components/LinkedInSolutions'
import SupportedCRM from './components/SupportedCRM'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Section3 />
      <Challenges />
      <Steps />
      <About />
      <LinkedInSolutions />
      <SupportedCRM />
      <HeroSection />
      <Footer />
    </>
  )
}

export default App
