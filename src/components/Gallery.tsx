import { motion } from 'framer-motion'

const galleryImages = [
  {
    id: 1,
    title: 'Ambience',
    category: 'Interior',
    src: 'https://images.unsplash.com/photo-1544025162-d76694cb3abb?w=500&h=500&fit=crop'
  },
  {
    id: 2,
    title: 'Fine Dining',
    category: 'Food',
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop'
  },
  {
    id: 3,
    title: 'Premium Plating',
    category: 'Food',
    src: 'https://images.unsplash.com/photo-1495566322556-b270b70d8c36?w=500&h=500&fit=crop'
  },
  {
    id: 4,
    title: 'Lounge Area',
    category: 'Interior',
    src: 'https://images.unsplash.com/photo-1470093851033-c8ca36513cac?w=500&h=500&fit=crop'
  },
  {
    id: 5,
    title: 'Cocktail Bar',
    category: 'Bar',
    src: 'https://images.unsplash.com/photo-1569718212b419ac5d0a1cb41b4c9b8c9?w=500&h=500&fit=crop'
  },
  {
    id: 6,
    title: 'Signature Dish',
    category: 'Food',
    src: 'https://images.unsplash.com/photo-1504674900967-955b2917ba9e?w=500&h=500&fit=crop'
  },
  {
    id: 7,
    title: 'Entertainment',
    category: 'Events',
    src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=500&fit=crop'
  },
  {
    id: 8,
    title: 'VIP Section',
    category: 'Interior',
    src: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=500&h=500&fit=crop'
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-4 sm:px-6 lg:px-8 bg-dark-card">
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
              Gallery
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Explore the beauty of our ambience and culinary artistry</p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg h-64 cursor-pointer"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-gold text-sm">{image.category}</p>
              </div>

              {/* Glassmorphism overlay on hover */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
