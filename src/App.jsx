import React from 'react'
import Hero from './sections/Hero'
import AnimatedCounter from './components/AnimatedCounter'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoShowcase from './sections/LogoSections'
import FeatureCards from './sections/FeatureCards'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AnimatedCounter/>
      <ShowcaseSection/>
      <LogoShowcase/>
      <FeatureCards/>
      <Experience/>
      <TechStack/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App