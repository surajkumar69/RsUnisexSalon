import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react'

const Contact = () => {
  const whatsappNumber = '919876240337'
  const phoneNumbers = ['+91 9876240337', '+91 7657870007']
  const address = 'RS Unisex Salon, Near Dr. Colony, Bhadson Road, East Enclave'

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I would like to inquire about your salon services.')
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleCall = (number) => {
    window.open(`tel:${number.replace(/\s/g, '')}`, '_self')
  }

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Decorative Glow */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold tracking-[0.3em] mb-4 font-medium">CONTACT US</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Get In <span className="text-gold-gradient">Touch</span>
          </h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <motion.div
              className="glass-card p-6 hover:border-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Address</h4>
                  <p className="text-white/70">{address}</p>
                </div>
              </div>
            </motion.div>

            {/* Phone Numbers */}
            <motion.div
              className="glass-card p-6 hover:border-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">Phone Numbers</h4>
                  <div className="space-y-1">
                    {phoneNumbers.map((number, index) => (
                      <button
                        key={index}
                        onClick={() => handleCall(number)}
                        className="block text-white/70 hover:text-gold transition-colors"
                      >
                        {number}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div
              className="glass-card p-6 hover:border-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">WhatsApp</h4>
                  <button
                    onClick={handleWhatsApp}
                    className="text-white/70 hover:text-gold transition-colors"
                  >
                    +91 9876240337
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              className="glass-card p-6 hover:border-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg 
                    className="w-6 h-6 text-gold" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H19V7.5L12 12 5 7.5V21H1.5C.65 21 0 20.35 0 19.5v-15c0-.85.65-1.5 1.5-1.5H4l8 5.5L20 3h2.5c.85 0 1.5.65 1.5 1.5z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold mb-2">Email</h4>
                  <a
                    href="mailto:rsunisexsalon07@gmail.com"
                    className="text-white/70 hover:text-gold transition-colors break-all"
                  >
                    rsunisexsalon07@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              className="glass-card p-6 hover:border-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Working Hours</h4>
                  <p className="text-white/70">
                    Monday - Sunday: 10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-4 overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.0!2d76.0!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiA3NsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
              title="RS Unisex Salon Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
