import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'

export default function FloatingWhatsApp() {
  const whatsappNumber = '919876543210' // Replace with actual number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello Aurous Restro Lounge, I'd like to make a reservation.`

  return (
    <>
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: [0.34, 1.56, 0.64, 1] }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 z-40 w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:shadow-green-400/50 transition-all group relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-green-300 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"
          animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        {/* Glow effect */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 0px rgba(74, 222, 128, 0)',
              '0 0 40px rgba(74, 222, 128, 0.8)',
              '0 0 0px rgba(74, 222, 128, 0)',
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute -inset-2 rounded-full"
        />
        
        <FiMessageCircle className="w-8 h-8 text-white relative z-10" />
        
        {/* Pulse Animation - Enhanced */}
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-full"
        />
        
        {/* Inner pulse ring */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          className="absolute inset-2 border-2 border-green-300 rounded-full opacity-50"
        />
      </motion.a>
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: -10, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-28 right-8 z-40"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="bg-dark-bg border border-gold rounded-lg px-4 py-2 text-white text-sm whitespace-nowrap pointer-events-none shadow-lg"
        >
          💬 Chat with us!
        </motion.div>
      </motion.div>
    </>
  )
}
