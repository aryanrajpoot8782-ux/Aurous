import { motion } from 'framer-motion'
import { FiMusic, FiMic, FiGlobe } from 'react-icons/fi'

export default function Experience() {
  const features = [
    {
      icon: FiMusic,
      title: 'Live Music Nights',
      description: 'Premium jazz, acoustic, and DJ sets creating the perfect ambience for your evening'
    },
    {
      icon: FiMic,
      title: 'Premium Ambience',
      description: 'Carefully curated lighting, decor, and sound systems for an unforgettable experience'
    },
    {
      icon: FiGlobe,
      title: 'Nightlife Vibe',
      description: 'Sophisticated atmosphere perfect for celebrations, dates, and exclusive gatherings'
    },
  ]

  return (
    <section id="experience" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-5xl sm:text-6xl font-serif font-bold mb-6 gradient-gold tracking-tight"
            >
              The Aurous Experience
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-8 leading-relaxed"
            >
              More than just a restaurant, Aurous is a destination where sophistication meets entertainment. 
              Step into a world of luxury where every detail is crafted to create unforgettable moments.
            </motion.p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.12, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                    className="glass-dark p-4 rounded-lg group hover:border-gold/50 transition-all relative overflow-hidden"
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute -inset-1 bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"
                      initial={{ opacity: 0 }}
                    />
                    
                    <div className="relative flex gap-4 items-start">
                      <motion.div 
                        animate={{ 
                          boxShadow: [
                            '0 0 0px rgba(212, 175, 55, 0)',
                            '0 0 20px rgba(212, 175, 55, 0.4)',
                            '0 0 0px rgba(212, 175, 55, 0)',
                          ]
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.3 }}
                        className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      >
                        <Icon className="w-6 h-6 text-dark-bg" />
                      </motion.div>
                      <div>
                        <h3 className="font-serif font-bold text-gold text-lg mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-serif font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all relative group overflow-hidden"
            >
              {/* Animated gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Glow effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(212, 175, 55, 0)',
                    '0 0 40px rgba(212, 175, 55, 0.8)',
                    '0 0 0px rgba(212, 175, 55, 0)',
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -inset-2 rounded-lg"
              />
              
              <span className="relative z-10">Discover More</span>
            </motion.button>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-2xl overflow-hidden glass-dark p-2 group"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1470093851033-c8ca36513cac?w=600&h=600&fit=crop"
                alt="Premium Lounge"
                className="w-full h-96 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                whileHover={{ scale: 1.05 }}
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent rounded-xl" />

              {/* Decorative frame with glow */}
              <motion.div 
                animate={{
                  boxShadow: [
                    'inset 0 0 0px rgba(212, 175, 55, 0.2)',
                    'inset 0 0 20px rgba(212, 175, 55, 0.4)',
                    'inset 0 0 0px rgba(212, 175, 55, 0.2)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-xl border-2 border-gold/30 pointer-events-none"
              />
            </motion.div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              animate={{ y: [0, 10, 0] }}
              className="absolute -bottom-6 -right-6 glass-dark p-6 rounded-lg border border-gold/30 max-w-xs group hover:border-gold/60 transition-all shadow-lg shadow-gold/20"
            >
              <p className="text-sm text-gray-400 mb-3">
                "An absolutely stunning experience. The ambience, food, and service are unparalleled."
              </p>
              <p className="text-gold font-bold">⭐⭐⭐⭐⭐ 4,892 Reviews</p>
            </motion.div>

            {/* Background glow - enhanced */}
            <motion.div
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl blur-3xl -z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
