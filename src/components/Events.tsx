import { motion } from 'framer-motion'
import { FiMusic, FiCalendar } from 'react-icons/fi'

const events = [
  {
    id: 1,
    title: 'Friday DJ Night',
    date: 'Every Friday',
    time: '9:00 PM - 2:00 AM',
    description: 'High-energy DJ sets featuring top tracks and commercial hits',
    icon: FiMusic,
    color: 'from-gold to-yellow-400'
  },
  {
    id: 2,
    title: 'Live Acoustic Sunday',
    date: 'Every Sunday',
    time: '7:00 PM - 11:00 PM',
    description: 'Intimate acoustic performances by local and visiting artists',
    icon: FiMusic,
    color: 'from-yellow-400 to-orange-400'
  },
  {
    id: 3,
    title: 'Corporate Events',
    date: 'By Reservation',
    time: 'Flexible Timings',
    description: 'Private events, meetings, and celebrations in our premium spaces',
    icon: FiCalendar,
    color: 'from-orange-400 to-red-400'
  },
  {
    id: 4,
    title: 'Weekend Brunch',
    date: 'Saturday & Sunday',
    time: '11:00 AM - 4:00 PM',
    description: 'Special brunch menu with live music in a relaxed ambience',
    icon: FiCalendar,
    color: 'from-red-400 to-pink-400'
  },
]

const EventCard = ({ event, idx }: any) => {
  const Icon = event.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
      viewport={{ once: true }}
      className="bg-dark-bg rounded-lg p-8 border border-dark-border hover:border-gold/50 group relative overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${event.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-full`}
      ></div>

      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${event.color}`}>
            <Icon className="w-6 h-6 text-dark-bg" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gold">{event.title}</h3>
            <p className="text-gray-400 text-sm">{event.date}</p>
          </div>
        </div>

        <p className="text-gray-400 mb-4">{event.description}</p>

        <div className="flex items-center gap-2 text-gold font-semibold">
          <span>🕐</span>
          <span>{event.time}</span>
        </div>

        <motion.button
          whileHover={{ x: 5 }}
          className="mt-4 text-gold font-semibold hover:text-yellow-400 transition-colors flex items-center gap-2"
        >
          Learn More →
        </motion.button>
      </div>
    </motion.div>
  )
}

export default function Events() {
  return (
    <section id="events" className="py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
              Live Events & Entertainment
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Experience unforgettable moments with our curated events</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, idx) => (
            <EventCard key={event.id} event={event} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
