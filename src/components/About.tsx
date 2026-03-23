import { motion } from 'framer-motion'
import { FiMusic, FiAward, FiGift } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-dark-card">
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
              About Aurous
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Nestled in the heart of Bistupur, Jamshedpur, Aurous Restro Lounge redefines luxury dining with our commitment to excellence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: FiAward,
              title: 'Premium Ambience',
              description: 'Elegantly designed spaces with contemporary aesthetics and comfortable seating for the perfect dining experience.'
            },
            {
              icon: FiMusic,
              title: 'Live Entertainment',
              description: 'Experience live music nights, DJ performances, and exclusive events that elevate your evening.'
            },
            {
              icon: FiGift,
              title: 'Fine Dining',
              description: 'Curated menu featuring international and Indian cuisines prepared by our expert culinary team.'
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-dark-bg rounded-lg p-8 border border-dark-border hover:border-gold/50 transition-all group"
            >
              <feature.icon className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-3 text-gold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-dark-bg rounded-lg p-8 border border-dark-border"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Our story began with a vision to create more than just a restaurant—a destination where memories are made. 
            Every detail, from our carefully selected wines to our bespoke ambience, reflects our passion for hospitality. 
            We believe that great food, exceptional service, and the perfect atmosphere come together to create magic on the plate and in the heart.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
