import { Fragment } from 'react'
import GlobalStyles from './styles/GlobalStyles'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProductSection from './components/ProductSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <main>
        <HeroSection />
        <ProductSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
