import { motion } from 'framer-motion'
import { FiInstagram, FiHeart } from 'react-icons/fi'

const instagramImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
    likes: 1250,
    caption: 'Plating perfection'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1504674900967-955b2917ba9e?w=400&h=400&fit=crop',
    likes: 2340,
    caption: 'Premium selection'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1470093851033-c8ca36513cac?w=400&h=400&fit=crop',
    likes: 3120,
    caption: 'Ambience at its best'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=400&fit=crop',
    likes: 1890,
    caption: 'Fresh seafood daily'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
    likes: 2450,
    caption: 'Sweet finales'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1569718212b419ac5d0a1cb41b4c9b8c9?w=400&h=400&fit=crop',
    likes: 3680,
    caption: 'Craft cocktails'
  },
]

export default function InstagramFeed() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gold/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <FiInstagram className="w-8 h-8 text-gold" />
            <h2 className="text-5xl font-serif font-bold gradient-gold tracking-tight">
              @aurouslounge
            </h2>
          </div>
          <p className="text-gray-400 text-lg">Follow our journey on Instagram</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {instagramImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.06, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl h-72 cursor-pointer"
            >
              {/* Image */}
              <motion.img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />

              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/40" />

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent flex flex-col justify-end p-6"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <p className="text-white font-serif font-bold mb-4 tracking-tight">{image.caption}</p>
                  <div className="flex items-center gap-2 text-gold">
                    <FiHeart className="w-5 h-5 fill-current" />
                    <span className="font-bold">{image.likes.toLocaleString()}</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Instagram icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center shadow-lg shadow-gold/50"
              >
                <FiInstagram className="w-6 h-6 text-dark-bg" />
              </motion.div>

              {/* Glassmorphism overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 100 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />

              {/* Glow effect on hover */}
              <motion.div
                animate={{
                  boxShadow: [
                    'inset 0 0 0px rgba(212, 175, 55, 0)',
                    'inset 0 0 20px rgba(212, 175, 55, 0.3)',
                    'inset 0 0 0px rgba(212, 175, 55, 0)',
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-serif font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all relative group overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity }}
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
            
            <FiInstagram className="w-6 h-6 relative z-10" />
            <span className="relative z-10">Follow Us on Instagram</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
