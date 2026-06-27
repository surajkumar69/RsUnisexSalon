import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'East Enclave',
      rating: 5,
      text: 'Absolutely loved my bridal makeup! The team was so professional and made me feel like a princess on my special day. Highly recommend RS Unisex Salon for all beauty services.',
      image: '👩'
    },
    {
      name: 'Rahul Verma',
      location: 'Bhadson Road',
      rating: 5,
      text: 'Best salon in the area! The hair styling and grooming services are top-notch. The staff is friendly and the ambiance is luxurious. Will definitely come back.',
      image: '👨'
    },
    {
      name: 'Anjali Gupta',
      location: 'Dr. Colony',
      rating: 5,
      text: 'The facial treatments here are amazing! My skin feels so refreshed and glowing. The prices are very reasonable for the quality of service provided.',
      image: '👩'
    },
    {
      name: 'Vikram Singh',
      location: 'East Enclave',
      rating: 5,
      text: 'Excellent service and great atmosphere. The hair coloring was done perfectly. The staff really knows what they are doing. 5 stars!',
      image: '👨'
    },
    {
      name: 'Meera Kapoor',
      location: 'Nearby Area',
      rating: 5,
      text: 'Had my engagement makeup done here and it was flawless! The makeup artist understood exactly what I wanted. Thank you RS Unisex Salon!',
      image: '👩'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-gold fill-gold' : 'text-gray-600'}`}
      />
    ))
  }

  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-darkGray to-black" />
      
      {/* Decorative Glow */}
      <motion.div
        className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl"
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gold tracking-[0.3em] mb-4 font-medium">TESTIMONIALS</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            What Our <span className="text-gold-gradient">Clients Say</span>
          </h3>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full flex items-center justify-center text-4xl">
                    {testimonials[currentIndex].image}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    
                    <Quote className="w-8 h-8 text-gold/50 mb-4 mx-auto md:mx-0" />
                    
                    <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
                      {testimonials[currentIndex].text}
                    </p>
                    
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gold text-sm">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-16 w-12 h-12 glass rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-16 w-12 h-12 glass rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
