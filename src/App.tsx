import { useState, useEffect } from 'react'
import Header from './components/Header'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import SignatureDishes from './components/SignatureDishes'
import Experience from './components/Experience'
import EventNights from './components/EventNights'
import InteractiveMenu from './components/InteractiveMenu'
import Testimonials from './components/Testimonials'
import BookingForm from './components/BookingForm'
import InstagramFeed from './components/InstagramFeed'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg">
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
      <Header isScrolled={isScrolled} />
      <Hero />
      <SignatureDishes />
      <Experience />
      <EventNights />
      <InteractiveMenu />
      <Testimonials />
      <InstagramFeed />
      <BookingForm />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
