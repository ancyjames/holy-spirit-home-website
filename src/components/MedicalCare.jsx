import {
  Stethoscope,
  Heart,
  Activity,
  Pill,
  UserCheck,
  TestTube,
  CalendarCheck,
  Building
} from 'lucide-react'
import './MedicalCare.css'

function MedicalCare() {
  const medicalServices = [
    {
      icon: Building,
      title: 'In-house Clinic',
      description: 'Routine nursing care and attention by qualified and experienced nurses'
    },
    {
      icon: CalendarCheck,
      title: 'Monthly Check-up',
      description: 'Regular health monitoring with monthly check-ups by doctor'
    },
    {
      icon: Stethoscope,
      title: 'Regular Doctor Visits',
      description: 'Regular visits by a Medical Practitioner for health consultations'
    },
    {
      icon: Heart,
      title: 'Homeo Clinic',
      description: 'Homeopathy clinic available on the campus for alternative treatment'
    },
    {
      icon: Activity,
      title: 'Physiotherapy',
      description: 'Weekly visits by a Physiotherapist for rehabilitation and therapy'
    },
    {
      icon: TestTube,
      title: 'Lab Services',
      description: 'Blood and urine collection for investigation and diagnosis'
    },
    {
      icon: Pill,
      title: 'Medicine Delivery',
      description: 'Convenient home delivery of prescribed medicines'
    },
    {
      icon: UserCheck,
      title: 'Caretaker Support',
      description: '24-hour caretaker support available for those who need assistance'
    },
  ]

  const nearbyHospitals = [
    'Apollo Hospital',
    'Fortis Hospital',
    'Jaya Deva Institute of Cardiology',
    "St. Philomena's Hospital",
    "St. John's Medical College Hospital"
  ]

  return (
    <section id="medical" className="medical section">
      <div className="container">
        <h2 className="section-title">Medical Care</h2>
        <p className="section-subtitle">
          Your health and well-being is our top priority. We provide comprehensive medical
          facilities to ensure peace of mind for you and your loved ones.
        </p>

        <div className="medical-grid">
          {medicalServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="medical-card">
                <div className="medical-icon">
                  <IconComponent size={24} />
                </div>
                <div className="medical-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hospitals-section">
          <h3>Nearby Hospitals</h3>
          <p className="hospitals-intro">
            Hospitals of repute are within reach and provide expert medical care and attention:
          </p>
          <div className="hospitals-list">
            {nearbyHospitals.map((hospital, index) => (
              <div key={index} className="hospital-tag">
                {hospital}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MedicalCare
