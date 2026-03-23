import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const reviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    rating: 5,
    text: 'Absolutely stunning ambience with impeccable service. The biryani was out of this world!',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    rating: 5,
    text: 'Best fine dining experience in Jamshedpur. The live music and cocktails are exceptional.',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    name: 'Arjun Verma',
    rating: 5,
    text: 'Brought my family here for a special occasion. Everything was perfect from start to finish.',
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 4,
    name: 'Sneha Desai',
    rating: 5,
    text: 'The ambience is simply magical. A perfect place for dates and celebrations.',
    avatar: 'https://i.pravatar.cc/150?img=4'
  },
  {
    id: 5,
    name: 'Vikram Singh',
    rating: 5,
    text: 'Premium experience at reasonable prices. We came back three times in one month!',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 6,
    name: 'Ananya Gupta',
    rating: 5,
    text: 'The food quality and presentation is top-notch. Every dish was a masterpiece.',
    avatar: 'https://i.pravatar.cc/150?img=6'
  },
]

const ReviewCard = ({ review, idx }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: idx * 0.1 }}
    viewport={{ once: true }}
    className="bg-dark-card rounded-lg p-6 border border-dark-border hover:border-gold/50 transition-all group"
  >
    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(review.rating)].map((_, i) => (
        <FiStar
          key={i}
          className="w-5 h-5 fill-gold text-gold group-hover:scale-110 transition-transform"
        />
      ))}
    </div>

    {/* Review Text */}
    <p className="text-gray-300 mb-6 italic">"{review.text}"</p>

    {/* User Info */}
    <div className="flex items-center gap-4">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="text-white font-bold">{review.name}</p>
        <p className="text-gold text-sm">Verified Customer</p>
      </div>
    </div>
  </motion.div>
)

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg">
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
              What Guests Say
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Join thousands of satisfied customers</p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard key={review.id} review={review} idx={idx} />
          ))}
        </div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-dark-card rounded-lg p-8 border border-gold/30">
            <p className="text-gold font-bold text-2xl mb-2">4.9 / 5.0</p>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-gray-400">Based on 450+ verified reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
