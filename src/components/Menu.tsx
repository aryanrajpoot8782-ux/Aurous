import { motion } from 'framer-motion'

interface MenuItem {
  name: string
  price: number
  description: string
}

const menuData = {
  starters: [
    { name: 'Crispy Paneer Tikka', price: 280, description: 'Golden fried paneer with spiced yogurt aioli' },
    { name: 'Shrimp Tempura', price: 320, description: 'Delicate shrimp in light tempura batter' },
    { name: 'Beetroot Carpaccio', price: 240, description: 'Thin sliced beetroot with goat cheese and microgreens' },
    { name: 'Truffle Hummus', price: 200, description: 'Creamy hummus drizzled with black truffle oil' },
  ],
  main: [
    { name: 'Tandoori Chicken Tikka', price: 480, description: 'Succulent chicken marinated in yogurt and spices' },
    { name: 'Pan Seared Salmon', price: 620, description: 'Fresh salmon with lemon butter sauce and seasonal vegetables' },
    { name: 'Butter Chicken Royale', price: 450, description: 'Creamy tomato-based curry with tender chicken pieces' },
    { name: 'Lamb Biryani', price: 520, description: 'Fragrant basmati rice cooked with tender lamb and aromatic spices' },
  ],
  drinks: [
    { name: 'Mojito Mocktail', price: 150, description: 'Fresh mint, lime juice, and sparkling water' },
    { name: 'Golden Whiskey Sour', price: 280, description: 'Premium whiskey with fresh lemon and honey' },
    { name: 'Signature Cocktail', price: 320, description: 'House special blend with premium spirits' },
    { name: 'Red Wine Glass', price: 350, description: 'Premium selection from our curated wine collection' },
  ],
}

const MenuCard = ({ item, delay }: { item: MenuItem; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="bg-dark-bg rounded-lg p-6 border border-dark-border hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10 transition-all group"
  >
    <div className="flex justify-between items-start mb-2">
      <h4 className="text-lg font-bold text-gold group-hover:text-yellow-400 transition-colors">
        {item.name}
      </h4>
      <span className="text-gold font-bold text-lg">₹{item.price}</span>
    </div>
    <p className="text-gray-400 text-sm">{item.description}</p>
  </motion.div>
)

export default function Menu() {
  return (
    <section id="menu" className="py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg">
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
              Our Menu
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Exquisite flavors crafted with passion and premium ingredients</p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {/* Starters */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gold mb-6 flex items-center gap-2"
            >
              <span className="w-10 h-1 bg-gradient-to-r from-gold to-transparent"></span>
              Starters
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData.starters.map((item, idx) => (
                <MenuCard key={idx} item={item} delay={idx * 0.1} />
              ))}
            </div>
          </div>

          {/* Main Course */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gold mb-6 flex items-center gap-2"
            >
              <span className="w-10 h-1 bg-gradient-to-r from-gold to-transparent"></span>
              Main Course
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData.main.map((item, idx) => (
                <MenuCard key={idx} item={item} delay={idx * 0.1} />
              ))}
            </div>
          </div>

          {/* Drinks */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gold mb-6 flex items-center gap-2"
            >
              <span className="w-10 h-1 bg-gradient-to-r from-gold to-transparent"></span>
              Drinks & Beverages
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData.drinks.map((item, idx) => (
                <MenuCard key={idx} item={item} delay={idx * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
