import { Heart, Phone, Mail, MapPin } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#medical', label: 'Medical Care' },
    { href: '#admission', label: 'Admission' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">HSH</div>
              <div className="footer-logo-text">
                <span className="footer-logo-name">Holy Spirit Home</span>
                <span className="footer-logo-tagline">for Senior Citizens</span>
              </div>
            </div>
            <p className="footer-description">
              A Home Away From Home for the Aged. Owned and managed by the Holy Spirit Sisters,
              belonging to the Society of the Servants of the Holy Spirit (SSpS).
            </p>
            <div className="footer-motto">
              <Heart size={16} />
              <span>"Service in Love"</span>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="footer-contact-items">
              <a href="https://maps.google.com/?q=Holy+Spirit+Home+Bannerghatta+Road+Bangalore" target="_blank" rel="noopener noreferrer">
                <MapPin size={18} />
                <span>Bannerghatta Road, S.O.S Post, Bengaluru - 560076</span>
              </a>
              <a href="tel:+917349769350">
                <Phone size={18} />
                <span>+91 7349769350</span>
              </a>
              <a href="mailto:holyspirithome1@gmail.com">
                <Mail size={18} />
                <span>holyspirithome1@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Holy Spirit Home for Senior Citizens. All rights reserved.</p>
          <p className="founder-credit">
            Founded by the Society of the Servants of the Holy Spirit (SSpS)
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
