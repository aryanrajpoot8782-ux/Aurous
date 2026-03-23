import { motion } from 'framer-motion'

export default function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Video Background Simulation */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg" />
        
        {/* Animated light rays */}
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)',
              'radial-gradient(ellipse at 80% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse at 50% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0"
        />

        {/* Cinematic grain texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-6"
        >
          <motion.div
            className="absolute inset-0 blur-3xl -z-10 bg-gradient-to-b from-gold/40 to-transparent opacity-30"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.h1
            className="text-7xl sm:text-8xl lg:text-9xl font-serif font-bold mb-4 leading-none tracking-tighter"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #FFD700, #FFA500)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(212, 175, 55, 0.3))',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            AUROUS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="text-gold tracking-[0.35em] text-lg font-light uppercase relative z-10"
          >
            <span className="inline-block">Luxury Dining & Lounge</span>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.p>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Where Luxury Meets Taste | Experience Nightlife Excellence in Jamshedpur
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => handleScroll('booking')}
            className="group relative px-10 py-4 text-dark-bg font-serif font-bold text-lg rounded-lg uppercase tracking-wide overflow-hidden"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold via-gold-light to-neon-gold opacity-100 group-hover:opacity-110"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-gold/40 to-gold-light/20 rounded-lg blur opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300"
              animate={{ boxShadow: ['0 0 20px rgba(212, 175, 55, 0)', '0 0 40px rgba(212, 175, 55, 0.5)', '0 0 20px rgba(212, 175, 55, 0)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <span className="relative z-10 flex items-center justify-center gap-2">
              Reserve Your Table
            </span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.08, borderColor: '#FFD700' }}
            whileTap={{ scale: 0.92 }}
            onClick={() => handleScroll('menu')}
            className="group px-10 py-4 border-2 border-gold text-gold font-serif font-bold text-lg rounded-lg uppercase tracking-wide transition-all relative overflow-hidden"
          >
            {/* Liquid border effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <span className="relative z-10 flex items-center justify-center gap-3">
              <motion.svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm7 7a2 2 0 11-4 0 2 2 0 014 0z" />
              </motion.svg>
              Explore Experience
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-2 bg-gradient-to-b from-gold to-transparent rounded-full"
            />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-40 right-10 w-60 h-60 bg-gold/5 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}
