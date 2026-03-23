import { motion } from 'framer-motion'
import { useState } from 'react'

const menuData = {
  starters: [
    { name: 'Crispy Paneer Tikka', price: '₹320', desc: 'Spiced yogurt aioli' },
    { name: 'Shrimp Tempura', price: '₹380', desc: 'Light tempura batter' },
    { name: 'Foie Gras Terrine', price: '₹520', desc: 'Apple gastrique' },
    { name: 'Truffle Hummus', price: '₹280', desc: 'Black truffle oil' },
  ],
  main: [
    { name: 'Wagyu Tenderloin', price: '₹1,800', desc: 'A5 Japanese, saffron butter' },
    { name: 'Butter Poached Lobster', price: '₹1,400', desc: 'Brown butter emulsion' },
    { name: 'Pan-Seared Salmon', price: '₹820', desc: 'Lemon butter, charred veg' },
    { name: 'Lamb Biryani', price: '₹680', desc: 'Fragrant, aromatic spices' },
  ],
  drinks: [
    { name: 'Signature Cocktail', price: '₹420', desc: 'House special blend' },
    { name: 'Golden Mojito', price: '₹280', desc: 'Fresh mint, lime' },
    { name: 'Red Wine Selection', price: '₹1,200', desc: 'Premium vintage' },
    { name: 'Craft Mocktail', price: '₹220', desc: 'Artisan non-alcoholic' },
  ],
}

// ✅ Better tab structure (NO BUGS)
const tabs = [
  { label: 'STARTERS', key: 'starters' },
  { label: 'MAIN COURSE', key: 'main' },
  { label: 'DRINKS', key: 'drinks' },
] as const

export default function InteractiveMenu() {
  const [activeTab, setActiveTab] = useState(tabs[0])

  const currentItems = menuData[activeTab.key]

  return (
    <section id="menu" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-7xl font-serif font-bold mb-6 gradient-gold tracking-tight">
            Curated Menu
          </h2>
          <p className="text-gray-400 text-lg">
            Premium selections from our culinary masters
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 font-serif font-bold tracking-wider text-lg transition-all duration-300 rounded-lg ${
                activeTab.label === tab.label
                  ? 'text-gold bg-white/5 border border-gold'
                  : 'text-gray-400 hover:text-gold'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          {currentItems?.length ? (
            currentItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="group relative"
              >
                <div className="relative glass-dark p-7 rounded-xl border border-gold/20 hover:border-gold/50 transition-all cursor-pointer hover:-translate-y-1">
                  
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="font-serif font-bold text-lg text-gold group-hover:text-gold-light transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-gold-light font-bold text-lg whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-white text-center col-span-2">
              No items found
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-10 py-4 bg-gradient-to-r from-gold to-gold-light text-black font-serif font-bold rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all">
            Download Full Menu
          </button>
        </div>

      </div>
    </section>
  )
}