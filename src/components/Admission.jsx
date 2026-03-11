import {
  FileText,
  UserCheck,
  CreditCard,
  Camera,
  AlertCircle,
  CheckCircle,
  Clock,
  Users
} from 'lucide-react'
import './Admission.css'

function Admission() {
  const requirements = [
    { icon: UserCheck, text: 'Age 65 years and above' },
    { icon: FileText, text: 'Medical certificate from a recognized Medical Practitioner about past and present health' },
    { icon: Camera, text: 'Recent passport size photo' },
    { icon: CreditCard, text: 'Xerox copy of Aadhar Card' },
    { icon: FileText, text: 'Duly filled and signed copy of the Agreement Form' },
  ]

  const guidelines = [
    'Residents are required to maintain cordial relations, peace and harmony with all',
    'Visitors are welcome from 7 AM to 7 PM',
    'Relatives and friends can book guest rooms in advance for overnight stay',
    'Residents going out must inform the Administrator and return by 9:00 PM',
    'Guardian/Nominee should meet the Administrator at least once a month',
    'Water and electricity should be used economically',
  ]

  return (
    <section id="admission" className="admission section">
      <div className="container">
        <h2 className="section-title">Admission Information</h2>
        <p className="section-subtitle">
          Join our caring community. Here's everything you need to know about becoming a resident.
        </p>

        <div className="admission-content">
          <div className="requirements-section">
            <h3>
              <FileText size={24} />
              Admission Requirements
            </h3>
            <div className="requirements-list">
              {requirements.map((req, index) => {
                const IconComponent = req.icon
                return (
                  <div key={index} className="requirement-item">
                    <div className="requirement-icon">
                      <IconComponent size={20} />
                    </div>
                    <span>{req.text}</span>
                  </div>
                )
              })}
            </div>

            <div className="eligibility-note">
              <AlertCircle size={20} />
              <div>
                <strong>Eligibility Note:</strong>
                <p>
                  Persons with Psychiatric illness, Alcoholism, or those against whom litigation
                  in court is pending are not eligible for admission. Decision about acceptance
                  rests with the management.
                </p>
              </div>
            </div>
          </div>

          <div className="guidelines-section">
            <h3>
              <Users size={24} />
              Resident Guidelines
            </h3>
            <div className="guidelines-list">
              {guidelines.map((guideline, index) => (
                <div key={index} className="guideline-item">
                  <CheckCircle size={18} className="guideline-icon" />
                  <span>{guideline}</span>
                </div>
              ))}
            </div>

            <div className="caretaker-info">
              <Clock size={24} />
              <div>
                <h4>24-Hour Care</h4>
                <p>
                  Those in need of caretakers for 24 hours are provided either by the Home
                  or through an Agency. The expenses are to be met by the resident.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h3>Ready to Learn More?</h3>
          <p>Contact us to schedule a visit and see our facilities firsthand.</p>
          <a href="#contact" className="btn btn-primary">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Admission
