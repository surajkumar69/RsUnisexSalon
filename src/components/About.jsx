import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Users, Sparkles, Heart, Award } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [counters, setCounters] = useState({
    clients: 0,
    services: 0,
    makeovers: 0,
    years: 0,
  })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps

      const targets = {
        clients: 2500,
        services: 50,
        makeovers: 500,
        years: 8,
      }

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps
        const easeProgress = 1 - Math.pow(1 - progress, 3)

        setCounters({
          clients: Math.floor(targets.clients * easeProgress),
          services: Math.floor(targets.services * easeProgress),
          makeovers: Math.floor(targets.makeovers * easeProgress),
          years: Math.floor(targets.years * easeProgress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView])

  const stats = [
    { icon: Users, label: 'Happy Clients', value: counters.clients, suffix: '+' },
    { icon: Sparkles, label: 'Beauty Services', value: counters.services, suffix: '+' },
    { icon: Heart, label: 'Bridal Makeovers', value: counters.makeovers, suffix: '+' },
    { icon: Award, label: 'Years of Experience', value: counters.years, suffix: '+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Decorative Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
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
            ABOUT US
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Welcome to <span className="text-gold-gradient">RS Unisex Salon</span>
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed"
          >
            At RS Unisex Salon, we believe that everyone deserves to look and feel their best. Our team of skilled professionals is dedicated to providing exceptional beauty and grooming services in a luxurious and comfortable environment.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-6 md:p-8 text-center hover:border-gold/30 transition-all duration-300 group"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              >
                <stat.icon className="w-8 h-8 text-gold" />
              </motion.div>
              <motion.div
                className="text-3xl md:text-4xl font-bold text-gold-gradient mb-2"
                key={stat.value}
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <div className="text-white/70 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={itemVariants}
            className="glass-card p-8"
          >
            <h4 className="text-2xl font-serif font-bold text-gold mb-4">Our Mission</h4>
            <p className="text-white/70 leading-relaxed">
              To provide world-class beauty and grooming services that enhance our clients' confidence and well-being. We strive to create an atmosphere of luxury and relaxation where every client feels like royalty.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="glass-card p-8"
          >
            <h4 className="text-2xl font-serif font-bold text-gold mb-4">Why Choose Us</h4>
            <ul className="text-white/70 space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-gold">✦</span>
                Experienced and certified professionals
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">✦</span>
                Premium quality products
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">✦</span>
                Hygienic and safe environment
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold">✦</span>
                Personalized services
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
