import { motion } from 'framer-motion'
import { FiMusic, FiCalendar } from 'react-icons/fi'

const events = [
  {
    id: 1,
    title: 'Electro Beats Friday',
    date: 'Every Friday',
    time: '9:00 PM - 3:00 AM',
    description: 'High-energy DJ sets featuring electronic and commercial hits',
    icon: FiMusic,
    neonColor: 'from-gold to-yellow-400'
  },
  {
    id: 2,
    title: 'Acoustic Sunday Serenade',
    date: 'Every Sunday',
    time: '7:00 PM - 11:00 PM',
    description: 'Intimate acoustic performances by award-winning local artists',
    icon: FiMusic,
    neonColor: 'from-yellow-400 to-orange-400'
  },
  {
    id: 3,
    title: 'Corporate Nights',
    date: 'By Request',
    time: 'Flexible',
    description: 'Premium private events and celebrations in exclusive spaces',
    icon: FiCalendar,
    neonColor: 'from-orange-400 to-red-400'
  },
  {
    id: 4,
    title: 'Weekend Brunch Sessions',
    date: 'Sat & Sun',
    time: '11:00 AM - 4:00 PM',
    description: 'Luxury brunch experience with live background music',
    icon: FiCalendar,
    neonColor: 'from-red-400 to-pink-400'
  },
]

export default function EventNights() {
  return (
    <section id="events" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl sm:text-7xl font-serif font-bold mb-6 tracking-tight">
            <span className="gradient-gold">Event Nights</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience unforgettable evenings with premium entertainment and world-class service
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => {
            const Icon = event.icon
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Neon glow background */}
                <motion.div
                  animate={{
                    boxShadow: [
                      `0 0 20px rgba(212, 175, 55, 0.2)`,
                      `0 0 40px rgba(212, 175, 55, 0.5)`,
                      `0 0 20px rgba(212, 175, 55, 0.2)`,
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                  className="absolute -inset-0.5 bg-gradient-to-r from-gold/30 to-gold/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="relative glass-dark rounded-2xl p-8 border-2 border-gold/30 group-hover:border-gold/60 transition-colors overflow-hidden"
                >
                  {/* Neon border light */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/50 to-transparent" />

                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      boxShadow: [
                        '0 0 0px rgba(212, 175, 55, 0)',
                        '0 0 30px rgba(212, 175, 55, 0.6)',
                        '0 0 0px rgba(212, 175, 55, 0)',
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.2 }}
                    className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg"
                  >
                    <Icon className="w-8 h-8 text-dark-bg" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-serif font-bold text-gold mb-2 group-hover:text-gold-light transition-colors tracking-tight">
                    {event.title}
                  </h3>

                  {/* Date & Time */}
                  <div className="flex gap-4 mb-4 text-sm">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.3 }}
                      className="px-3 py-1 bg-gold/10 text-gold rounded-full border border-gold/30"
                    >
                      {event.date}
                    </motion.span>
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.1 + 0.4 }}
                      className="px-3 py-1 bg-gold/10 text-gold rounded-full border border-gold/30"
                    >
                      🕐 {event.time}
                    </motion.span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6">
                    {event.description}
                  </p>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.08, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-serif font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all relative group overflow-hidden"
                  >
                    {/* Animated gradient overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity"
                      animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <span className="relative z-10">Reserve Spot</span>
                  </motion.button>

                  {/* Glow effect on hover */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(212, 175, 55, 0)',
                        '0 0 20px rgba(212, 175, 55, 0.5)',
                        '0 0 0px rgba(212, 175, 55, 0)',
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.3 }}
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
