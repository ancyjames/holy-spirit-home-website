import {
  Building2,
  Utensils,
  ShowerHead,
  Wifi,
  Camera,
  Shirt,
  Wind,
  Users,
  Accessibility,
  Sun
} from 'lucide-react'
import './Facilities.css'

function Facilities() {
  const facilities = [
    {
      icon: Building2,
      title: 'Well-Designed Building',
      description: 'Hexagonal two-storied structure enclosing a lovely floral garden with free flow of light and air'
    },
    {
      icon: Accessibility,
      title: 'Lift Access',
      description: 'Spacious corridors with lift on all floors for easy movement'
    },
    {
      icon: Camera,
      title: 'CCTV Surveillance',
      description: 'Complete security with CCTV monitoring throughout the premises'
    },
    {
      icon: ShowerHead,
      title: 'Modern Amenities',
      description: 'Self-contained rooms with solar hot water available round the clock'
    },
    {
      icon: Utensils,
      title: 'Dining Hall',
      description: 'Spacious, well-ventilated dining hall with hygienic kitchen and experienced cooks'
    },
    {
      icon: Users,
      title: 'Multipurpose Hall',
      description: 'Spacious hall for various occasions, functions, recreational activities and entertainment'
    },
    {
      icon: Shirt,
      title: 'Laundry Services',
      description: 'Complete laundry facilities available with scheduled services'
    },
    {
      icon: Sun,
      title: 'Beautiful Gardens',
      description: 'Lush greenery with flowering trees, shrubs and vast open spaces for walks'
    },
    {
      icon: Wind,
      title: 'Peaceful Environment',
      description: 'Serene setting enlivened by the rhythm and melody of birds\' songs'
    },
    {
      icon: Wifi,
      title: 'Guest Rooms',
      description: 'Rooms available for visitors and relatives of residents with advance booking'
    },
  ]

  return (
    <section id="facilities" className="facilities section">
      <div className="container">
        <h2 className="section-title">Our Facilities</h2>
        <p className="section-subtitle">
          Holy Spirit Home is open to all senior citizens irrespective of caste, creed or religion.
          All rooms are self-contained, well lit and ventilated.
        </p>

        <div className="facilities-grid">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon
            return (
              <div key={index} className="facility-card">
                <div className="facility-icon">
                  <IconComponent size={28} />
                </div>
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            )
          })}
        </div>

        <div className="facilities-note">
          <h3>Room Furnishings</h3>
          <p>
            Rooms are furnished with basic items of furniture such as cupboard, cot, chair and table.
            Residents are expected to bring along essential necessities like mattress, bed-linen, pillow,
            blanket, personal clothing, cutlery, tiffin-carrier, thermos flask, toiletries etc.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Facilities
