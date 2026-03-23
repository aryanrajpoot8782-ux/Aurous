import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'Signature', 'Experience', 'Events', 'Menu', 'Contact']

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-2xl border-b border-gold/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <motion.div
            className="relative w-12 h-12"
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            {/* Ambient glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold to-gold-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold to-gold-light rounded-full opacity-80 group-hover:opacity-100 transition-opacity blur-md shadow-lg shadow-gold/60"
              animate={{ boxShadow: ['0 0 20px rgba(212, 175, 55, 0.5)', '0 0 40px rgba(212, 175, 55, 0.8)', '0 0 20px rgba(212, 175, 55, 0.5)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative w-full h-full bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center shadow-lg shadow-gold/60">
              <span className="font-serif font-bold text-dark-bg text-lg">A</span>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col"
            whileHover={{ x: 4 }}
          >
            <span className="text-xl font-serif font-bold gradient-gold">AUROUS</span>
            <span className="text-xs text-gold tracking-widest">LUXURY DINING</span>
          </motion.div>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item, idx) => (
            <motion.button
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              onClick={() => handleScroll(item.toLowerCase())}
              className="text-gray-300 hover:text-gold font-medium transition-colors duration-300 relative group text-sm uppercase tracking-wide"
            >
              {item}
              <motion.span
                initial={{ scaleX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/30 via-gold to-gold/30 origin-left"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {/* Ambient glow on hover */}
              <motion.div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent blur opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="hidden md:block"
        >
          <motion.button
            whileHover={{ scale: 1.08, y: -2 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-7 py-3 text-dark-bg font-serif font-bold rounded-lg uppercase tracking-wider overflow-hidden transition-all"
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light opacity-100"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            {/* Glow effect */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-gold/40 to-gold-light/20 rounded-lg blur opacity-0 group-hover:opacity-100 -z-10"
              animate={{ boxShadow: ['0 0 0 rgba(212, 175, 55, 0)', '0 0 30px rgba(212, 175, 55, 0.6)', '0 0 0 rgba(212, 175, 55, 0)'] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
            
            <span className="relative z-10 text-sm">Reserve</span>
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-gold text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-dark border-t border-gold/20"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ x: 10 }}
                onClick={() => handleScroll(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-gold hover:bg-gold/10 rounded transition-all"
              >
                {item}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
              className="w-full px-4 py-2 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-bold rounded transition-all mt-4"
            >
              Reserve Now
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
