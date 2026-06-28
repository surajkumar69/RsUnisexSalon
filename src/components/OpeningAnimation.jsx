import { motion } from 'framer-motion'
import logo from '../../logoNew.jpeg'

const OpeningAnimation = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative">
        {/* Floating Glow Effects */}
        <motion.div
          className="absolute -inset-20 bg-gold/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Logo Animation */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            delay: 0.3,
          }}
        >
          <motion.div
            className="mb-6"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img 
              src={logo} 
              alt="RS Unisex Salon Logo" 
              className="w-40 h-40 mx-auto object-contain rounded-full shadow-2xl shadow-gold/30"
            />
          </motion.div>
          
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold text-gold-gradient mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            RS UNISEX SALON
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 font-light tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Style • Beauty • Makeup • Confidence
          </motion.p>
        </motion.div>
        
        {/* Decorative Lines */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-gold/20 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gold/10 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        />
      </div>
    </motion.div>
  )
}

export default OpeningAnimation
