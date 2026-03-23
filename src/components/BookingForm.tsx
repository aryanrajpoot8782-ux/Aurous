import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMessageCircle } from 'react-icons/fi'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: '',
  })

  const [focused, setFocused] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hello, I'd like to reserve a table at Aurous Restro Lounge.
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formData.date}
Time: ${formData.time}
Number of Guests: ${formData.guests}
${formData.message ? `Special Requests: ${formData.message}` : ''}`
    
    const whatsappURL = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
    
    setIsSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', phone: '', date: '', time: '', guests: '2', message: '' })
      setIsSubmitted(false)
    }, 2000)
  }

  return (
    <section id="booking" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-bl from-gold/15 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl font-serif font-bold mb-6 gradient-gold">
            Reserve Excellence
          </h2>
          <p className="text-gray-400 text-lg">Secure your unforgettable evening at Aurous</p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-dark rounded-2xl p-8 sm:p-12 border-2 border-gold/30 shadow-2xl shadow-gold/10"
        >
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 bg-gradient-to-r from-gold/20 to-gold/10 border-2 border-gold rounded-lg text-center"
            >
              <p className="text-gold font-bold">✓ Booking request sent via WhatsApp!</p>
              <p className="text-gold/70 text-sm mt-2">We'll confirm your reservation shortly</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.label
                  animate={{
                    y: focused === 'name' || formData.name ? -24 : 0,
                    fontSize: focused === 'name' || formData.name ? '12px' : '16px',
                  }}
                  className="absolute left-4 top-4 text-gold pointer-events-none transition-all font-medium"
                >
                  Full Name
                </motion.label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full bg-dark-bg/50 border-2 border-gold/30 focus:border-gold text-white rounded-lg px-4 pt-6 pb-3 focus:outline-none transition-all focus:bg-dark-bg/80 focus:shadow-lg focus:shadow-gold/20"
                />
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.label
                  animate={{
                    y: focused === 'phone' || formData.phone ? -24 : 0,
                    fontSize: focused === 'phone' || formData.phone ? '12px' : '16px',
                  }}
                  className="absolute left-4 top-4 text-gold pointer-events-none transition-all font-medium"
                >
                  Phone
                </motion.label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                  required
                  placeholder="+91"
                  className="w-full bg-dark-bg/50 border-2 border-gold/30 focus:border-gold text-white rounded-lg px-4 pt-6 pb-3 focus:outline-none transition-all focus:bg-dark-bg/80 focus:shadow-lg focus:shadow-gold/20"
                />
              </motion.div>

              {/* Date */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.label
                  animate={{
                    y: focused === 'date' || formData.date ? -24 : 0,
                    fontSize: focused === 'date' || formData.date ? '12px' : '16px',
                  }}
                  className="absolute left-4 top-4 text-gold pointer-events-none transition-all font-medium"
                >
                  Date
                </motion.label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  onFocus={() => setFocused('date')}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full bg-dark-bg/50 border-2 border-gold/30 focus:border-gold text-white rounded-lg px-4 pt-6 pb-3 focus:outline-none transition-all focus:bg-dark-bg/80 focus:shadow-lg focus:shadow-gold/20"
                />
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.label
                  animate={{
                    y: focused === 'time' || formData.time ? -24 : 0,
                    fontSize: focused === 'time' || formData.time ? '12px' : '16px',
                  }}
                  className="absolute left-4 top-4 text-gold pointer-events-none transition-all font-medium"
                >
                  Time
                </motion.label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  onFocus={() => setFocused('time')}
                  onBlur={() => setFocused(null)}
                  required
                  className="w-full bg-dark-bg/50 border-2 border-gold/30 focus:border-gold text-white rounded-lg px-4 pt-6 pb-3 focus:outline-none transition-all focus:bg-dark-bg/80 focus:shadow-lg focus:shadow-gold/20"
                />
              </motion.div>

              {/* Guests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.label
                  className="absolute left-4 top-1 text-gold text-xs font-medium"
                >
                  Guests
                </motion.label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  onFocus={() => setFocused('guests')}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-dark-bg/50 border-2 border-gold/30 focus:border-gold text-white rounded-lg px-4 pt-6 pb-3 focus:outline-none transition-all focus:bg-dark-bg/80 focus:shadow-lg focus:shadow-gold/20"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                    <option key={n} value={n} className="bg-dark-bg">{n}</option>
                  ))}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.label
                  animate={{
                    y: focused === 'message' || formData.message ? -24 : 0,
                    fontSize: focused === 'message' || formData.message ? '12px' : '16px',
                  }}
                  className="absolute left-4 top-4 text-gold pointer-events-none transition-all font-medium"
                >
                  Special Requests
                </motion.label>
                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="e.g., Window seat, celebration"
                  className="w-full bg-dark-bg/50 border-2 border-gold/30 focus:border-gold text-white rounded-lg px-4 pt-6 pb-3 focus:outline-none transition-all focus:bg-dark-bg/80 focus:shadow-lg focus:shadow-gold/20"
                />
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.08, y: -4 }}
                whileTap={{ scale: 0.92 }}
                type="submit"
                className="flex-1 group relative px-8 py-4 text-dark-bg font-serif font-bold text-lg rounded-lg uppercase tracking-wide overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold to-gold-light opacity-100 group-hover:opacity-110"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-gold/40 to-gold-light/20 rounded-lg blur opacity-0 group-hover:opacity-100 -z-10 transition-opacity"
                  animate={{ boxShadow: ['0 0 0 rgba(212, 175, 55, 0)', '0 0 40px rgba(212, 175, 55, 0.6)', '0 0 0 rgba(212, 175, 55, 0)'] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <FiMessageCircle className="w-5 h-5" />
                  Reserve via WhatsApp
                </span>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                whileHover={{ scale: 1.08, borderColor: '#FFD700' }}
                whileTap={{ scale: 0.92 }}
                type="button"
                className="flex-1 group relative px-8 py-4 border-2 border-gold text-gold font-serif font-bold text-lg rounded-lg uppercase tracking-wide overflow-hidden transition-all"
              >
                {/* Hover background fill */}
                <motion.div
                  className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                
                {/* Glow on hover */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-gold/20 to-transparent rounded-lg blur opacity-0 group-hover:opacity-100 -z-10"
                />
                
                <span className="relative z-10">Call Us</span>
              </motion.button>
            </div>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center text-gray-400 text-sm mt-8 font-light"
          >
            Confirmation will be sent within 1 hour
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
