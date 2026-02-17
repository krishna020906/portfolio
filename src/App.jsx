import React from 'react'
import Hero from './sections/Hero'
import AnimatedCounter from './components/AnimatedCounter'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoShowcase from './sections/LogoSections'
import FeatureCards from './sections/FeatureCards'

const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AnimatedCounter/>
      <ShowcaseSection/>
      <LogoShowcase/>
      <FeatureCards/>
    </>
  )
}

export default App