import { Heart, ArrowRight } from 'lucide-react'
import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-badge">
          <Heart size={16} />
          <span>Established 2006</span>
        </div>
        <h1 className="hero-title">
          A Home Away From Home
          <span className="hero-title-accent">for the Aged</span>
        </h1>
        <p className="hero-description">
          Holy Spirit Home for Senior Citizens, owned and managed by the Holy Spirit Sisters,
          is a place of quality care, service, peace and harmony for the elderly.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
            <ArrowRight size={18} />
          </a>
          <a href="#about" className="btn btn-white">
            Learn More
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">18+</span>
            <span className="hero-stat-label">Years of Service</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">24/7</span>
            <span className="hero-stat-label">Care & Support</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">100%</span>
            <span className="hero-stat-label">Dedicated Staff</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
