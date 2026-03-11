import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Create mailto link
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )
    window.location.href = `mailto:holyspirithome1@gmail.com?subject=${subject}&body=${body}`
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Bannerghatta Road, S.O.S Post, Bengaluru - 560076',
      link: 'https://maps.google.com/?q=Holy+Spirit+Home+Bannerghatta+Road+Bangalore'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 7349769350',
      link: 'tel:+917349769350'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'holyspirithome1@gmail.com',
      link: 'mailto:holyspirithome1@gmail.com'
    },
    {
      icon: Clock,
      title: 'Visiting Hours',
      content: '7:00 AM - 7:00 PM (All Days)',
      link: null
    }
  ]

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">
          We'd love to hear from you. Reach out to schedule a visit or learn more about our home.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p className="contact-intro">
              Feel free to reach out to us through any of the following channels.
              We're here to answer your questions and help you.
            </p>

            <div className="contact-cards">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={index}
                    href={item.link}
                    className="contact-card"
                    target={item.link?.startsWith('http') ? '_blank' : undefined}
                    rel={item.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact-card-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="contact-card-content">
                      <h4>{item.title}</h4>
                      <p>{item.content}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            <div className="nearby-info">
              <h4>Nearby Landmarks</h4>
              <p>
                Located near Holy Spirit School & PU College. South Indian Bank is closely situated.
                Shopping complexes like Meenakshi Mall, D-Mart and Supermarkets are in the vicinity.
              </p>
            </div>
          </div>

          <div className="contact-form-section">
            <h3>Send us a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
