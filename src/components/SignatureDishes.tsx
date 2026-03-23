import { motion } from 'framer-motion'
import { useState } from 'react'

const dishes = [
  {
    id: 1,
    name: 'Black Truffle Risotto',
    price: '₹1,200',
    description: 'Creamy Arborio rice with black truffle, aged Parmesan, and champagne reduction',
    image: 'https://images.unsplash.com/photo-1476124369162-f4978c03e7ef?w=600&h=600&fit=crop',
    rating: 4.9,
    tag: 'VEG'
  },
  {
    id: 2,
    name: 'Pan-Seared Foie Gras',
    price: '₹1,500',
    description: 'Premium foie gras with apple gastrique and brioche crumble',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop',
    rating: 4.95,
    tag: 'PREMIUM'
  },
  {
    id: 3,
    name: 'Wagyu Beef Tenderloin',
    price: '₹1,800',
    description: 'A5 Japanese Wagyu with saffron butter and charred vegetables',
    image: 'https://images.unsplash.com/photo-1504674900967-955b2917ba9e?w=600&h=600&fit=crop',
    rating: 5.0,
    tag: 'SIGNATURE'
  },
  {
    id: 4,
    name: 'Butter Poached Lobster',
    price: '₹1,400',
    description: 'Fresh lobster tail in brown butter emulsion with tarragon velouté',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop',
    rating: 4.85,
    tag: 'SEAFOOD'
  },
  {
    id: 5,
    name: 'Saffron Scallops',
    price: '₹980',
    description: 'Diver-caught scallops with saffron foam and microgreens',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=600&fit=crop',
    rating: 4.75,
    tag: 'SEAFOOD'
  },
  {
    id: 6,
    name: 'Dark Chocolate Sphere',
    price: '₹680',
    description: 'Warm 72% dark chocolate sphere with passion fruit sauce',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop',
    rating: 4.9,
    tag: 'DESSERT'
  },
]

export default function SignatureDishes() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="signature" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-gold/10 to-gold/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-bl from-gold/10 to-gold/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl sm:text-7xl font-serif font-bold mb-6 gradient-gold tracking-tight">
            Signature Creations
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Culinary masterpieces crafted by our executive chefs using the finest global ingredients
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent w-32 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dishes.map((dish, idx) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.12, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(dish.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group"
            >
              {/* Card Glow */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-gold-light/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={hoveredId === dish.id ? { boxShadow: '0 0 40px rgba(212, 175, 55, 0.5)' } : {}}
              />

              {/* Card */}
              <motion.div
                animate={{
                  y: hoveredId === dish.id ? -16 : 0,
                }}
                className="relative rounded-2xl overflow-hidden glass-dark h-full border border-gold/20 group-hover:border-gold/50 transition-colors duration-500"
              >
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden bg-gradient-to-b from-dark-bg to-dark-card">
                  {/* Cinematic gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg/60 z-10" />
                  
                  <motion.img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredId === dish.id ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Tag */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="absolute top-4 left-4 px-4 py-2 bg-gold/20 backdrop-blur-md border border-gold/50 rounded-full text-gold text-sm font-bold tracking-wider"
                  >
                    {dish.tag}
                  </motion.div>

                  {/* Price on hover */}
                  <motion.div
                    animate={{
                      y: hoveredId === dish.id ? 0 : 20,
                      opacity: hoveredId === dish.id ? 1 : 0,
                    }}
                    className="absolute top-4 right-4 px-6 py-2 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-bold rounded-lg text-lg"
                  >
                    {dish.price}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-serif font-bold text-gold group-hover:text-gold-light transition-colors">
                      {dish.name}
                    </h3>
                    {/* Rating */}
                    <motion.div
                      animate={{
                        scale: hoveredId === dish.id ? 1.1 : 1,
                      }}
                      className="text-gold text-sm font-bold"
                    >
                      ⭐ {dish.rating}
                    </motion.div>
                  </div>

                  {/* Description - Show on hover */}
                  <motion.p
                    animate={{
                      opacity: hoveredId === dish.id ? 1 : 0.6,
                      height: hoveredId === dish.id ? 'auto' : '40px',
                    }}
                    className="text-gray-400 text-sm line-clamp-2 group-hover:line-clamp-none"
                  >
                    {dish.description}
                  </motion.p>

                  {/* CTA on hover */}
                  <motion.button
                    animate={{
                      opacity: hoveredId === dish.id ? 1 : 0,
                      y: hoveredId === dish.id ? 0 : 10,
                      pointerEvents: hoveredId === dish.id ? 'auto' : 'none',
                    }}
                    className="w-full mt-4 py-2 bg-gradient-to-r from-gold to-gold-light text-dark-bg font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all"
                  >
                    Add to Reservation
                  </motion.button>
                </div>

                {/* Neon border on hover */}
                <motion.div
                  animate={{
                    boxShadow: hoveredId === dish.id
                      ? '0 0 30px rgba(212, 175, 55, 0.6), inset 0 0 30px rgba(212, 175, 55, 0.1)'
                      : '0 0 0px rgba(212, 175, 55, 0)',
                  }}
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-shadow"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
