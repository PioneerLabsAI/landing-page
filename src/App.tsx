import { useState, useEffect } from 'react'
import './App.css'

// Import components
import Header from './components/Header'
import Hero from './components/Hero'
import ProductOverview from './components/ProductOverview'
import JupiterSection from './components/JupiterSection'
import MercurySection from './components/MercurySection'
import TechnologySection from './components/TechnologySection'
import BenefitsSection from './components/BenefitsSection'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white">
      <Header />
      <main>
        <Hero scrollY={scrollY} />
        <ProductOverview />
        <JupiterSection scrollY={scrollY} />
        <MercurySection scrollY={scrollY} />
        <TechnologySection />
        <BenefitsSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
