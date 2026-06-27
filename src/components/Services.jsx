import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Scissors, 
  Sparkles, 
  Droplets, 
  Eye, 
  Hand, 
  Palette, 
  Smile,
  User
} from 'lucide-react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const serviceCategories = [
    {
      title: 'Hair Services',
      icon: Scissors,
      services: [
        { name: 'Hair Cut', price: 'Starting from ₹150' },
        { name: 'Hair Wash', price: 'Starting from ₹50' },
        { name: 'Blow Dry', price: 'Starting from ₹100' },
        { name: 'Hair Spa', price: 'Starting from ₹300' },
        { name: 'Hair Coloring', price: 'Starting from ₹300' },
        { name: 'Hair Polishing', price: 'Starting from ₹500' },
        { name: 'Hair Ironing', price: 'Starting from ₹200' },
        { name: 'Root Touch Up', price: 'Starting from ₹400' },
        { name: 'Highlights', price: 'Starting from ₹600' },
      ]
    },
    {
      title: 'Facial',
      icon: Sparkles,
      services: [
        { name: 'Aroma Facial', price: '₹600' },
        { name: 'Lotus Facial', price: '₹800' },
        { name: 'O3 Facial', price: '₹2000' },
        { name: 'D-Tan', price: '₹1200' },
        { name: 'Diamond Facial', price: '₹1000' },
        { name: 'Gold Facial', price: '₹800' },
        { name: 'Pearl Facial', price: '₹700' },
        { name: 'Fruit Facial', price: '₹500' },
      ]
    },
    {
      title: 'Hair Treatments',
      icon: Droplets,
      services: [
        { name: 'Smoothening', price: '₹4000' },
        { name: 'Keratin Treatment', price: '₹4000' },
        { name: 'Shine Bond', price: '₹5000' },
      ]
    },
    {
      title: 'Threading',
      icon: Eye,
      services: [
        { name: 'Eyebrows', price: '₹20' },
        { name: 'Upper Lips', price: '₹20' },
        { name: 'Forehead', price: '₹20' },
        { name: 'Chin', price: '₹20' },
        { name: 'Full Face', price: '₹80' },
      ]
    },
    {
      title: 'Beauty Services',
      icon: Hand,
      services: [
        { name: 'Manicure', price: 'Starting from ₹200' },
        { name: 'Pedicure', price: 'Starting from ₹300' },
        { name: 'Body Massage', price: 'Starting from ₹500' },
        { name: 'Body Polishing', price: 'Starting from ₹800' },
      ]
    },
    {
      title: 'Makeup',
      icon: Palette,
      services: [
        { name: 'Party Makeup', price: 'Starting from ₹1500' },
        { name: 'Engagement Makeup', price: 'Starting from ₹3000' },
        { name: 'Reception Makeup', price: 'Starting from ₹3500' },
        { name: 'Bridal Makeup', price: 'Starting from ₹15000' },
        { name: 'Pre-Bridal Packages', price: 'Starting from ₹8000' },
      ]
    },
    {
      title: 'Gents Services',
      icon: User,
      services: [
        { name: 'Hair Cut', price: '₹150' },
        { name: 'Shampoo Styling', price: '₹50' },
        { name: 'Head Massage with Wash', price: '₹150' },
        { name: 'Beard Trim/Shave', price: '₹50' },
        { name: 'Hair Color', price: '₹300' },
        { name: 'Beard Color', price: '₹200' },
        { name: 'Normal Cleanup', price: '₹300' },
      ]
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Decorative Glow */}
      <motion.div
        className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
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
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-gold tracking-[0.3em] mb-4 font-medium"
          >
            OUR SERVICES
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Premium Beauty <span className="text-gold-gradient">& Grooming Services</span>
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            Discover our comprehensive range of services designed to enhance your beauty and confidence
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 hover:border-gold/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  >
                    <Icon className="w-7 h-7 text-gold" />
                  </motion.div>
                  <h4 className="text-xl font-serif font-bold text-white">{category.title}</h4>
                </div>
                
                <ul className="space-y-3">
                  {category.services.map((service, sIndex) => (
                    <li
                      key={sIndex}
                      className="flex justify-between items-center text-white/70 group/item hover:text-gold transition-colors"
                    >
                      <span>{service.name}</span>
                      <span className="text-gold font-medium">{service.price}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
