import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { IndianRupee } from 'lucide-react'

const PriceList = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const priceData = [
    {
      category: 'Facial',
      items: [
        { name: 'Aroma Facial', price: 600 },
        { name: 'Lotus Facial', price: 800 },
        { name: 'O3 Facial', price: 2000 },
        { name: 'D-Tan', price: 1200 },
        { name: 'Diamond Facial', price: 1000 },
        { name: 'Gold Facial', price: 800 },
        { name: 'Pearl Facial', price: 700 },
        { name: 'Fruit Facial', price: 500 },
      ]
    },
    {
      category: 'Rebounding',
      items: [
        { name: 'Smoothening', price: 4000 },
        { name: 'Shine Bond', price: 5000 },
        { name: 'Keratin Treatment', price: 4000 },
      ]
    },
    {
      category: 'Threading',
      items: [
        { name: 'Eye Brows', price: 20 },
        { name: 'Upper Lips', price: 20 },
        { name: 'Fore Head', price: 20 },
        { name: 'Chin', price: 20 },
        { name: 'Full Face', price: 80 },
      ]
    },
    {
      category: 'Gents',
      items: [
        { name: 'Hair Cut', price: 150 },
        { name: 'Shampoo Styling', price: 50 },
        { name: 'Head Message with Wash', price: 150 },
        { name: 'Beard Trim/Shave', price: 50 },
        { name: 'Colour (Hair)', price: 300 },
        { name: 'High Light', price: 600 },
        { name: 'Beard Color', price: 200 },
        { name: 'Normal Cleanup', price: 300 },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="price-list" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Decorative Glow */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
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
            PRICE LIST
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Transparent <span className="text-gold-gradient">& Affordable Pricing</span>
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/70 max-w-3xl mx-auto"
          >
            Quality services at competitive prices. No hidden charges, no surprises.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {priceData.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 hover:border-gold/30 transition-all duration-300"
            >
              <h4 className="text-2xl font-serif font-bold text-gold mb-6 pb-4 border-b border-white/10">
                {category.category}
              </h4>
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    className="flex justify-between items-center group"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-white/80 group-hover:text-gold transition-colors">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-1 text-gold font-semibold">
                      <IndianRupee className="w-4 h-4" />
                      <span>{item.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm">
            * Prices may vary based on hair length and specific requirements. Contact us for exact pricing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PriceList
