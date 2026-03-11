import { Target, Eye, Heart, CheckCircle } from 'lucide-react'
import './About.css'

function About() {
  const goals = [
    'Create an atmosphere conducive for prayer, reflection and serenity',
    'Nurture peace, love and hope through daily prayer, Holy Mass and healing service',
    'Revitalize physical energy through indoor games and other recreational facilities',
    'Offer prompt attention in need with love and concern',
    'Provide end stage care with respect for life',
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Holy Spirit Home</h2>
        <p className="section-subtitle">
          Owned and managed by the Holy Spirit Sisters, belonging to the Society of the Servants of the Holy Spirit (SSpS)
        </p>

        <div className="about-intro">
          <div className="about-intro-content">
            <p>
              Realizing the need for holistic care of the elderly, the Home was started in the year 2006
              in the Holy Spirit Convent campus, close to Holy Spirit School & PU College. It is situated
              in a peaceful and pleasant setting with lush greenery, of flowering trees and shrubs,
              enlivened by the rhythm and melody of birds' songs.
            </p>
            <p>
              The vast open spaces around the lush green cover invite you to walk around for recreation
              and physical exercises. The main building is a two storied structure, hexagonal in design,
              enclosing a lovely floral garden, with beautiful lawn that adds charm and colour to the scene.
            </p>
          </div>
        </div>

        <div className="values-grid">
          <div className="value-card motto">
            <div className="value-icon">
              <Heart size={32} />
            </div>
            <h3>Our Motto</h3>
            <p className="value-highlight">"Service in Love"</p>
          </div>

          <div className="value-card vision">
            <div className="value-icon">
              <Eye size={32} />
            </div>
            <h3>Our Vision</h3>
            <p>
              Holy Spirit Home will be a place of quality care, service, peace and harmony for the elderly
              in accordance with the missionary charism of our Founder St. Arnold Janssen and Co-Foundresses
              Blessed Maria and Blessed Josepha.
            </p>
          </div>

          <div className="value-card mission">
            <div className="value-icon">
              <Target size={32} />
            </div>
            <h3>Our Mission</h3>
            <p>
              We commit ourselves to impart God's love and compassion to the aged through tender care
              and loving concern.
            </p>
          </div>
        </div>

        <div className="goals-section">
          <h3 className="goals-title">Our Goals</h3>
          <div className="goals-list">
            {goals.map((goal, index) => (
              <div key={index} className="goal-item">
                <CheckCircle size={24} className="goal-icon" />
                <span>{goal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
