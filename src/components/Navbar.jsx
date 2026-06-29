import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import logo from '../../logoNew.jpeg'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Price List', id: 'price-list' },
    { name: 'Hair Services', id: 'hair-services-pricing' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = menuItems.map(item => item.id)
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [menuItems])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src={logo} 
              alt="RS Unisex Salon Logo" 
              className="h-14 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id ? 'text-gold' : 'text-white/70 hover:text-gold'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="tel:+919876240337"
            className="hidden lg:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-gold to-goldDark text-black font-semibold rounded-full hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden glass border-t border-white/10 mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {menuItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left font-medium transition-colors ${
                      activeSection === item.id ? 'text-gold' : 'text-white/70'
                    }`}
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.a
                  href="tel:+919876240337"
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-goldDark text-black font-semibold rounded-full text-center justify-center mt-4"
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
