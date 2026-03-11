import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#medical', label: 'Medical Care' },
    { href: '#daily-life', label: 'Daily Life' },
    { href: '#admission', label: 'Admission' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-contact">
            <a href="tel:+917349769350">
              <Phone size={14} />
              <span>+91 7349769350</span>
            </a>
            <a href="mailto:holyspirithome1@gmail.com">
              <Mail size={14} />
              <span>holyspirithome1@gmail.com</span>
            </a>
          </div>
          <div className="top-bar-motto">
            "Service in Love"
          </div>
        </div>
      </div>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-content">
          <a href="#home" className="logo">
            <div className="logo-icon">HSH</div>
            <div className="logo-text">
              <span className="logo-name">Holy Spirit Home</span>
              <span className="logo-tagline">for Senior Citizens</span>
            </div>
          </a>

          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={handleNavClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
