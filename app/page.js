'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Send,
  Check,
  Twitter,
  Instagram,
  Linkedin,
  ShoppingBag
} from 'lucide-react'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      const windowHeight = window.innerHeight
      const elementVisible = 100

      reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('active')
        }
      })
    }

    handleScroll()
    
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Navbar */}
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-content">
          <a href="#" className="logo">Air<span>Dosa</span></a>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="#pricing" className="btn btn-outline" style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem' }}>Order Now</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content reveal">
            <h1>Craving a Dosa?<br />Look Up.</h1>
            <p>AirDosa&apos;s AI-powered drone delivery brings piping hot, perfectly crispy dosas to your balcony in under 10 minutes. The future of South Indian breakfast is airborne.</p>
            <div className="hero-btns">
              <a href="#pricing" className="btn btn-primary">
                Start Dropping
                <Send size={20} />
              </a>
              <a href="#features" className="btn btn-outline">How it works</a>
            </div>
          </div>
          <div className="hero-image reveal delay-2">
            <Image src="/drone.png" alt="AirDosa AI Delivery Drone" width={600} height={600} priority />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="reveal">Why AirDosa is Revolutionary</h2>
          <div className="features-grid">
            <div className="feature-card reveal delay-1">
              <div className="feature-icon">🎯</div>
              <h3>AI Precision Drop</h3>
              <p>Our advanced computer vision models detect your exact balcony or terrace coordinates, ensuring a safe and accurate landing every time without spilling the sambar.</p>
            </div>
            <div className="feature-card reveal delay-2">
              <div className="feature-icon">🔥</div>
              <h3>Crispy Guarantee™</h3>
              <p>Aerospace-grade thermal packaging maintains exactly 75°C, preserving that perfect golden crispiness from our cloud kitchen directly to your hands.</p>
            </div>
            <div className="feature-card reveal delay-3">
              <div className="feature-icon">🥥</div>
              <h3>Infinite Chutney</h3>
              <p>Smart load-balancing ensures your dosa arrives with an optimal ratio of coconut chutney and sambar. Need more? The drone carries reserves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 className="reveal">Choose Your Flight Plan</h2>
          <div className="pricing-grid">
            
            {/* Plan 1 */}
            <div className="pricing-card reveal delay-1">
              <h3>Casual Craver</h3>
              <p>For the occasional dosa enthusiast.</p>
              <div className="price">₹49<span>/flight</span></div>
              <ul className="features-list">
                <li><Check size={20} /> Standard 15-min delivery</li>
                <li><Check size={20} /> Basic thermal packaging</li>
                <li><Check size={20} /> Choice of 5 classic dosa varieties</li>
                <li><Check size={20} /> Standard chutney packet</li>
              </ul>
              <a href="#" className="btn btn-outline" style={{ width: '100%' }}>Order Once</a>
            </div>

            {/* Plan 2 */}
            <div className="pricing-card popular reveal delay-2">
              <div className="popular-badge">Most Popular</div>
              <h3>Dosa Prime</h3>
              <p>Unlimited priority drone deliveries.</p>
              <div className="price">₹999<span>/month</span></div>
              <ul className="features-list">
                <li><Check size={20} /> Lightning 8-min delivery</li>
                <li><Check size={20} /> Aerospace Crispy Guarantee™</li>
                <li><Check size={20} /> Access to all 30+ premium varieties</li>
                <li><Check size={20} /> Infinite Chutney unlocked</li>
                <li><Check size={20} /> Early access to experimental batters</li>
              </ul>
              <a href="#" className="btn btn-primary" style={{ width: '100%' }}>Subscribe Now</a>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        <div className="container footer-content reveal">
          <a href="#" className="logo" style={{ fontSize: '2rem' }}>Air<span>Dosa</span></a>
          <p style={{ maxWidth: '400px', margin: '0 auto' }}>Revolutionizing South Indian cuisine with cutting-edge drone technology and artificial intelligence.</p>
          <div className="social-links">
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
          </div>
          <div className="copyright">
            &copy; 2026 AirDosa Technologies Pvt Ltd. Bangalore, India.
          </div>
        </div>
      </footer>

      {/* Floating Order Button */}
      <a href="#pricing" className="floating-btn" aria-label="Order Now">
        <ShoppingBag size={30} />
      </a>
    </>
  )
}
