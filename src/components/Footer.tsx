import { motion } from 'framer-motion'
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="relative bg-dark-bg border-t border-gold/20 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-tl from-gold/5 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gold/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-4 relative group"
            >
              {/* Glow backdrop */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0px rgba(212, 175, 55, 0)',
                    '0 0 30px rgba(212, 175, 55, 0.6)',
                    '0 0 0px rgba(212, 175, 55, 0)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-3 rounded-lg"
              />
              
              <div className="relative flex items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="w-10 h-10 bg-gradient-to-br from-gold via-gold-light to-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/50"
                >
                  <span className="text-dark-bg font-bold text-lg">A</span>
                </motion.div>
                <span className="text-2xl font-serif font-bold gradient-gold">
                  Aurous
                </span>
              </div>
            </motion.div>
            <p className="text-gray-400 leading-relaxed mb-4 text-sm">
              Experience ultra-premium dining in a luxury lounge setting. Where elegance meets epicurean excellence.
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-gold to-gold-light rounded-full" />
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gold font-serif font-bold text-lg mb-6 tracking-tight">Explore</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Menu', 'Events'].map((link, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-gold-light transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Policies */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gold font-serif font-bold text-lg mb-6 tracking-tight">Policies</h4>
            <ul className="space-y-3">
              {['Privacy', 'Terms', 'Cancellation', 'Careers'].map((link, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8 }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-gold-light transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-gold font-serif font-bold text-lg mb-6 tracking-tight">Connect</h4>
            <div className="flex gap-4">
              {[
                { Icon: FiInstagram, url: 'https://instagram.com' },
                { Icon: FiFacebook, url: 'https://facebook.com' },
                { Icon: FiTwitter, url: 'https://twitter.com' },
                { Icon: FiLinkedin, url: 'https://linkedin.com' },
              ].map((social, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Glow backdrop */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(212, 175, 55, 0)',
                        '0 0 20px rgba(212, 175, 55, 0.6)',
                        '0 0 0px rgba(212, 175, 55, 0)',
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
                    className="absolute -inset-2 rounded-full"
                  />
                  
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-10 h-10 rounded-full bg-gradient-to-br from-gold/20 to-gold-light/20 border border-gold/30 group-hover:border-gold/60 flex items-center justify-center text-gold group-hover:text-gold-light transition-all duration-300 shadow-lg"
                  >
                    <social.Icon className="w-5 h-5" />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6"
        >
          <p className="text-gray-500 text-sm">
            &copy; 2024 Aurous Restro Lounge. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Crafted with passion for an unforgettable luxury experience.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
