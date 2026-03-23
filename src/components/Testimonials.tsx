import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Event Organizer',
    text: 'Aurous redefined luxury dining for us. The ambience, food, and service were absolutely flawless. Our corporate event was unforgettable.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Food Critic',
    text: 'As a food critic, I\'ve visited many premium restaurants. Aurous stands out with its exceptional culinary execution and overall experience.',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5
  },
  {
    id: 3,
    name: 'Arjun Verma',
    role: 'Business Executive',
    text: 'The perfect place for client meetings and celebrations. Professional staff, premium atmosphere, exceptional food. Highly recommended.',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5
  },
  {
    id: 4,
    name: 'Sneha Desai',
    role: 'Entrepreneur',
    text: 'I brought my family for our anniversary. The personalized service and attention to detail made it a night we\'ll always remember.',
    avatar: 'https://i.pravatar.cc/150?img=4',
    rating: 5
  },
  {
    id: 5,
    name: 'Vikram Singh',
    role: 'Hospitality Expert',
    text: 'Aurous sets the benchmark for luxury establishments in Jamshedpur. Every aspect, from ambience to cuisine, is impeccably executed.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: 5
  },
]

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoplay])

  const goToPrev = () => {
    setAutoplay(false)
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setAutoplay(false)
    setCurrentIdx((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl font-serif font-bold mb-6 gradient-gold tracking-tight">
            Guest Testimonials
          </h2>
          <p className="text-gray-400 text-lg">Experiences shared by our valued guests</p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              className="group relative rounded-2xl p-12 sm:p-16 border-2 border-gold/30 group-hover:border-gold/60 transition-all"
              style={{
                background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.8) 0%, rgba(20, 24, 41, 0.6) 100%)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 40px rgba(212, 175, 55, 0.15), inset 0 1px 20px rgba(212, 175, 55, 0.05)',
              }}
            >
              {/* Animated background glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              {/* Content */}
              <div className="mb-8">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIdx].rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-2xl"
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>

                {/* Testimonial text */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300 mb-8 italic leading-relaxed min-h-28"
                >
                  "{testimonials[currentIdx].text}"
                </motion.p>
              </div>

              {/* Author */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4"
              >
                <img
                  src={testimonials[currentIdx].avatar}
                  alt={testimonials[currentIdx].name}
                  className="w-16 h-16 rounded-full border-2 border-gold"
                />
                <div>
                  <p className="font-serif font-bold text-lg text-gold">
                    {testimonials[currentIdx].name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonials[currentIdx].role}</p>
                </div>
              </motion.div>

              {/* Top left accent */}
              <div className="absolute top-4 left-4 text-6xl text-gold/20">
                "
              </div>

              {/* Top right accent */}
              <div className="absolute bottom-4 right-4 text-6xl text-gold/20">
                "
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => {
                    setAutoplay(false)
                    setCurrentIdx(idx)
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === currentIdx
                      ? 'w-8 bg-gradient-to-r from-gold to-gold-light'
                      : 'bg-gold/30 hover:bg-gold/50'
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrev}
                className="w-12 h-12 rounded-full border-2 border-gold/50 hover:border-gold flex items-center justify-center text-gold hover:text-gold-light transition-colors"
              >
                <FiChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="w-12 h-12 rounded-full border-2 border-gold/50 hover:border-gold flex items-center justify-center text-gold hover:text-gold-light transition-colors"
              >
                <FiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Counter */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              <span className="text-gold font-bold">{currentIdx + 1}</span> / {testimonials.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
