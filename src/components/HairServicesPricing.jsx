import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Scissors, 
  Droplets, 
  Wind, 
  Sparkles, 
  Smile, 
  RefreshCw, 
  Zap, 
  Layers, 
  Palette, 
  Gem,
  IndianRupee 
} from 'lucide-react'

const HairServicesPricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      name: 'Head Wash',
      price: 150,
      description: 'Refreshing cleanse with premium shampoo & deep conditioning.',
      icon: Droplets
    },
    {
      name: 'Blow Dry',
      price: 250,
      description: 'Professional blow-out styling for volume, bounce, and shine.',
      icon: Wind
    },
    {
      name: 'Head Wash + Blow Dry',
      price: 300,
      description: 'The perfect combo: a deep wash followed by professional blow dry styling.',
      icon: Sparkles
    },
    {
      name: 'Hair Cut',
      price: 350,
      description: 'Precision styling and haircut tailored to your personality.',
      icon: Scissors
    },
    {
      name: 'Head Massage',
      price: 200,
      description: 'Relaxing oil therapy to stimulate blood flow and relieve tension.',
      icon: Smile
    },
    {
      name: 'Head Massage + Wash + Dryer',
      price: 450,
      description: 'Complete stress relief with massage, wash, and blow dry finish.',
      icon: RefreshCw
    },
    {
      name: 'Hair Ironing',
      price: 300,
      description: 'Sleek, straight, and smooth styling using professional straighteners.',
      icon: Zap
    },
    {
      name: 'Split Ends',
      price: 300,
      description: 'Trimming away damaged hair tips to promote healthy hair growth.',
      icon: Scissors
    },
    {
      name: 'Root Touch Up',
      price: 500,
      description: 'Flawless root coverage to keep your hair color seamless.',
      icon: Layers
    },
    {
      name: 'Global Colour',
      price: 2000,
      description: 'Complete hair color transformation with premium, safe products.',
      icon: Palette
    },
    {
      name: 'Highlights',
      price: 2500,
      description: 'Add depth and radiance with bespoke hair highlights.',
      icon: Layers
    },
    {
      name: 'Colour Application',
      price: 500,
      description: 'Expert, mess-free application of your preferred hair color.',
      icon: Palette
    },
    {
      name: 'Hair Polishing',
      price: 2000,
      description: 'Nourishing gloss treatment to restore vibrant shine and texture.',
      icon: Gem
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
    <section id="hair-services-pricing" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Decorative Glow */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* Header */}
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
            HAIR SERVICES & PRICING
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Exquisite Hair Care <span className="text-gold-gradient">& Styling</span>
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            Experience ultimate luxury with our range of professional hair services tailored just for you.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-card p-6 flex flex-col justify-between hover:border-gold/30 transition-all duration-300 group"
                whileHover={{ y: -5 }}
              >
                <div>
                  {/* Icon Container */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-gold" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Price Tag */}
                <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gold/10 border border-gold/30 rounded-full text-gold font-bold text-lg w-fit">
                  <IndianRupee className="w-4 h-4" />
                  <span>{service.price}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default HairServicesPricing
