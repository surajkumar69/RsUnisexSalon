import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const whatsappNumber = '919876240337'

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I would like to inquire about your salon services.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="w-12 h-12 glass rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={handleWhatsApp}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </div>
  )
}

export default FloatingButtons
