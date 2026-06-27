import { motion } from 'framer-motion'
import { Phone, Calendar, MessageCircle, ArrowRight } from 'lucide-react'

const Hero = () => {
  const whatsappNumber = '919876240337'
  const phoneNumber = '919876240337'

  const handleBookAppointment = () => {
    const section = document.getElementById('booking')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I would like to inquire about your salon services.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleCall = () => {
    window.open(`tel:${phoneNumber}`, '_self')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80')] bg-cover bg-center opacity-30" />
      </div>

      {/* Floating Glow Effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2
            className="text-lg md:text-xl text-gold tracking-[0.3em] mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            WELCOME TO
          </motion.h2>
          
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Premium Unisex Salon
            <br />
            <span className="text-gold-gradient">& Bridal Makeup Studio</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Experience Luxury Hair Styling, Beauty Treatments, Makeup, and Grooming Services by Professional Experts.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              onClick={handleBookAppointment}
              className="group px-8 py-4 bg-gradient-to-r from-gold to-goldDark text-black font-semibold rounded-full flex items-center gap-2 hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={handleCall}
              className="px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full flex items-center gap-2 hover:bg-gold hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </motion.button>

            <motion.button
              onClick={handleWhatsApp}
              className="px-8 py-4 bg-green-500 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-green-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gold rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
