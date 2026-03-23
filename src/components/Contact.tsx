import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiClock, FiMail } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-gold/10 to-transparent rounded-full blur-3xl"
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
          <h2 className="text-6xl sm:text-7xl font-serif font-bold mb-6 gradient-gold tracking-tight">
            Connect With Us
          </h2>
          <p className="text-gray-400 text-lg">Ready to experience luxury dining?</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="glass-dark rounded-xl p-6 border border-gold/30 hover:border-gold/60 transition-all group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"
                initial={{ opacity: 0 }}
              />
              
              <div className="relative flex gap-4">
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      '0 0 0px rgba(212, 175, 55, 0)',
                      '0 0 20px rgba(212, 175, 55, 0.4)',
                      '0 0 0px rgba(212, 175, 55, 0)',
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <FiMapPin className="w-6 h-6 text-dark-bg" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gold mb-2">Location</h3>
                  <p className="text-gray-400">
                    Bistupur, Jamshedpur
                    <br />
                    Jharkhand - 831001, India
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="glass-dark rounded-xl p-6 border border-gold/30 hover:border-gold/60 transition-all group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"
                initial={{ opacity: 0 }}
              />
              
              <div className="relative flex gap-4">
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      '0 0 0px rgba(212, 175, 55, 0)',
                      '0 0 20px rgba(212, 175, 55, 0.4)',
                      '0 0 0px rgba(212, 175, 55, 0)',
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
                  className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <FiPhone className="w-6 h-6 text-dark-bg" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gold mb-2">Phone</h3>
                  <p className="text-gray-400">
                    <a href="tel:+919876543210" className="hover:text-gold-light transition">+91 98765 43210</a>
                    <br />
                    <a href="tel:+919876543211" className="hover:text-gold-light transition">+91 98765 43211</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="glass-dark rounded-xl p-6 border border-gold/30 hover:border-gold/60 transition-all group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"
                initial={{ opacity: 0 }}
              />
              
              <div className="relative flex gap-4">
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      '0 0 0px rgba(212, 175, 55, 0)',
                      '0 0 20px rgba(212, 175, 55, 0.4)',
                      '0 0 0px rgba(212, 175, 55, 0)',
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.4 }}
                  className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <FiMail className="w-6 h-6 text-dark-bg" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gold mb-2">Email</h3>
                  <p className="text-gray-400">
                    <a href="mailto:info@aurouslounge.com" className="hover:text-gold-light transition">info@aurouslounge.com</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
              className="glass-dark rounded-xl p-6 border border-gold/30 hover:border-gold/60 transition-all group relative overflow-hidden"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold/10 to-gold-light/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur"
                initial={{ opacity: 0 }}
              />
              
              <div className="relative flex gap-4">
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      '0 0 0px rgba(212, 175, 55, 0)',
                      '0 0 20px rgba(212, 175, 55, 0.4)',
                      '0 0 0px rgba(212, 175, 55, 0)',
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                >
                  <FiClock className="w-6 h-6 text-dark-bg" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-gold mb-2">Opening Hours</h3>
                  <p className="text-gray-400 text-sm space-y-1">
                    <div>Mon - Thu: 5:00 PM - 1:00 AM</div>
                    <div>Fri - Sat: 5:00 PM - 2:00 AM</div>
                    <div>Sunday: 12:00 PM - 12:00 AM</div>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden glass-dark border-2 border-gold/30 h-96 lg:h-full min-h-96 group hover:border-gold/60 transition-all"
          >
            {/* Glow effect on hover */}
            <motion.div
              animate={{
                boxShadow: [
                  'inset 0 0 0px rgba(212, 175, 55, 0)',
                  'inset 0 0 20px rgba(212, 175, 55, 0.3)',
                  'inset 0 0 0px rgba(212, 175, 55, 0)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl pointer-events-none"
            />
            
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.1234567890!2d84.8!3d22.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ4JzAwLjAiTiA4NMKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
