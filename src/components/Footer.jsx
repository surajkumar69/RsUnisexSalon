import { motion } from 'framer-motion'
import { Phone, MapPin, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react'
import logo from '../../logoNew.jpeg'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Price List', id: 'price-list' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' },
  ]

  const services = [
    'Hair Styling',
    'Bridal Makeup',
    'Facial Treatments',
    'Hair Treatments',
    'Beauty Services',
    'Gents Grooming',
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-darkGray pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="RS Unisex Salon Logo" 
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Premium unisex salon offering world-class beauty and grooming services. Experience luxury at its finest.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <Youtube className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-white/60 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/60 text-sm">+91 9876240337</p>
                  <p className="text-white/60 text-sm">+91 7657870007</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <p className="text-white/60 text-sm">
                  RS Unisex Salon, Near Dr. Colony, Bhadson Road, East Enclave
                </p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © {new Date().getFullYear()} RS Unisex Salon. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
