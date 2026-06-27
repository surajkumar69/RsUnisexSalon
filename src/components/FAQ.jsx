import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What are your salon timings?',
      answer: 'We are open from 10:00 AM to 8:00 PM, Monday to Sunday. We recommend booking appointments in advance to avoid waiting.'
    },
    {
      question: 'Do you offer bridal packages?',
      answer: 'Yes, we offer comprehensive bridal packages including pre-bridal treatments, engagement makeup, reception makeup, and complete bridal makeup. Our packages start from ₹8,000.'
    },
    {
      question: 'What products do you use for treatments?',
      answer: 'We use only premium, branded products for all our treatments. Our product range includes L\'Oreal, Schwarzkopf, Wella, and other top international brands to ensure the best results.'
    },
    {
      question: 'How long does a hair smoothening treatment take?',
      answer: 'Hair smoothening typically takes 3-4 hours depending on your hair length and texture. We recommend booking enough time for the complete treatment.'
    },
    {
      question: 'Do you provide home services?',
      answer: 'Currently, we provide services only at our salon. However, for special occasions like bridal makeup, we can arrange for home services with prior booking.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, UPI, all major credit/debit cards, and digital payments. Payment can be made after the service is completed.'
    },
    {
      question: 'Do I need to book an appointment?',
      answer: 'While walk-ins are welcome, we highly recommend booking an appointment to minimize waiting time. You can book via phone, WhatsApp, or our online booking form.'
    },
    {
      question: 'Are your staff trained and certified?',
      answer: 'Yes, all our staff members are professionally trained and certified. They undergo regular training to stay updated with the latest trends and techniques.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Decorative Glow */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl"
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
          <h2 className="text-gold tracking-[0.3em] mb-4 font-medium">FAQ</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  className="flex-shrink-0 w-10 h-10 bg-gold/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gold" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gold" />
                  )}
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
