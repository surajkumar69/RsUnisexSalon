import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Upload } from 'lucide-react'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Placeholder images - will be replaced with uploaded Indian salon images
  const galleryImages = [
    {
      id: 1,
      title: 'Salon Interior',
      placeholder: true
    },
    {
      id: 2,
      title: 'Hair Styling',
      placeholder: true
    },
    {
      id: 3,
      title: 'Bridal Makeup',
      placeholder: true
    },
    {
      id: 4,
      title: 'Beauty Treatment',
      placeholder: true
    },
    {
      id: 5,
      title: 'Gents Grooming',
      placeholder: true
    },
    {
      id: 6,
      title: 'Our Team',
      placeholder: true
    }
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="gallery" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Decorative Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
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
            OUR GALLERY
          </motion.h2>
          <motion.h3
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Showcase of <span className="text-gold-gradient">Our Work</span>
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-lg text-white/70 max-w-3xl mx-auto mb-8"
          >
            Browse through our portfolio of stunning transformations and beautiful creations
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-gold"
          >
            <Upload className="w-5 h-5" />
            <span className="text-sm">Upload your salon images to replace placeholders</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="relative group overflow-hidden rounded-2xl aspect-square glass-card"
              whileHover={{ scale: 1.02 }}
            >
              {image.placeholder ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                  <Camera className="w-12 h-12 text-gold/50 mb-3" />
                  <span className="text-white/50 text-sm">{image.title}</span>
                  <span className="text-white/30 text-xs mt-1">Image to be uploaded</span>
                </div>
              ) : (
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              )}
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-semibold">{image.title}</h4>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <p className="text-white/50 text-sm max-w-2xl mx-auto">
            Please upload your salon interior photos, hair styling photos, makeup photos, bridal makeup photos, and staff photos to replace these placeholders. We'll use only Indian salon aesthetics as requested.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Gallery
