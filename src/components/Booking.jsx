import { motion } from 'framer-motion'
import { useState } from 'react'
import { Calendar, Clock, Phone, User, MessageSquare, Send } from 'lucide-react'

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    service: '',
    appointmentDate: '',
    appointmentTime: '',
    message: ''
  })

  const services = [
    'Hair Cut',
    'Hair Coloring',
    'Facial',
    'Makeup',
    'Bridal Package',
    'Hair Treatment',
    'Threading',
    'Manicure/Pedicure',
    'Body Massage',
    'Other'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const whatsappNumber = '919876240337'
    const message = encodeURIComponent(
      `New Booking Request:\n\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phoneNumber}\n` +
      `Service: ${formData.service}\n` +
      `Date: ${formData.appointmentDate}\n` +
      `Time: ${formData.appointmentTime}\n` +
      `Message: ${formData.message}`
    )
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="booking" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Decorative Glow */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
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
          <h2 className="text-gold tracking-[0.3em] mb-4 font-medium">BOOK APPOINTMENT</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Schedule Your <span className="text-gold-gradient">Visit</span>
          </h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Book your appointment online and we'll confirm it via WhatsApp
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12">
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-white/70 mb-2 text-sm font-medium">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-white/70 mb-2 text-sm font-medium">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-white/70 mb-2 text-sm font-medium">
                  Service *
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full pl-4 pr-10 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-black">
                        {service}
                      </option>
                    ))}
                  </select>
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold pointer-events-none" />
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/70 mb-2 text-sm font-medium">
                    Appointment Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 mb-2 text-sm font-medium">
                    Appointment Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold" />
                    <input
                      type="time"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/70 mb-2 text-sm font-medium">
                  Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gold" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any additional requirements or notes"
                    rows="4"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gold to-goldDark text-black font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Book via WhatsApp</span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Booking
