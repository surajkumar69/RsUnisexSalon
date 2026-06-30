import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import HairServicesPricing from './components/HairServicesPricing'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Booking from './components/Booking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import FloatingButtons from './components/FloatingButtons'
import OpeningAnimation from './components/OpeningAnimation'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    // Check if device supports cursor (not touch device)
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setShowCursor(!isTouchDevice)
    
    // Hide opening animation after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <OpeningAnimation />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {showCursor && <CustomCursor />}
          <ScrollProgress />
          <Navbar />
          <Hero />
          <About />
          <Services />
          <HairServicesPricing />
          <Testimonials />
          <FAQ />
          <Booking />
          <Contact />
          <Footer />
          <FloatingButtons />
        </motion.div>
      )}
    </>
  )
}

export default App
