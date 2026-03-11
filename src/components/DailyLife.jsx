import { Coffee, Sun, UtensilsCrossed, Clock, Church, Moon } from 'lucide-react'
import './DailyLife.css'

function DailyLife() {
  const schedule = [
    { time: '6:00 AM', activity: 'Bed Coffee/Tea', icon: Coffee },
    { time: '7:00 AM', activity: 'Holy Mass', icon: Church },
    { time: '7:30 AM', activity: 'Breakfast', icon: UtensilsCrossed },
    { time: '10:00 AM', activity: 'Coffee/Tea', icon: Coffee },
    { time: '12:30 PM', activity: 'Lunch', icon: UtensilsCrossed },
    { time: '4:00 PM', activity: 'Tea with Snacks', icon: Coffee },
    { time: '7:30 PM', activity: 'Dinner', icon: UtensilsCrossed },
    { time: 'After Dinner', activity: 'Milk - Recreation Hall', icon: Moon },
  ]

  return (
    <section id="daily-life" className="daily-life section">
      <div className="container">
        <h2 className="section-title">Daily Life at Holy Spirit Home</h2>
        <p className="section-subtitle">
          A well-structured day that balances spiritual nourishment, nutritious meals,
          and meaningful activities for our residents.
        </p>

        <div className="daily-life-content">
          <div className="schedule-section">
            <h3 className="schedule-title">
              <Clock size={24} />
              Daily Schedule
            </h3>
            <div className="schedule-grid">
              {schedule.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="schedule-item">
                    <div className="schedule-time">{item.time}</div>
                    <div className="schedule-divider">
                      <div className="schedule-dot"></div>
                    </div>
                    <div className="schedule-activity">
                      <IconComponent size={18} />
                      <span>{item.activity}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="life-features">
            <div className="life-card prayer">
              <div className="life-card-icon">
                <Church size={32} />
              </div>
              <h4>Place of Prayer & Worship</h4>
              <p>
                The new annexe building has a vast spacious prayer room which is always kept open.
                It creates an atmosphere conducive to prayer, reflection and serenity.
                There is Holy Mass daily in the morning and prayer services in the morning and evening.
              </p>
            </div>

            <div className="life-card food">
              <div className="life-card-icon">
                <UtensilsCrossed size={32} />
              </div>
              <h4>Nutritious Meals</h4>
              <p>
                The kitchen is well equipped and hygienic, with experienced cooks closely
                monitored by the Administrator. Regular meals and refreshments are served
                throughout the day to ensure proper nutrition.
              </p>
            </div>

            <div className="life-card recreation">
              <div className="life-card-icon">
                <Sun size={32} />
              </div>
              <h4>Recreation & Activities</h4>
              <p>
                Indoor games and other recreational facilities help revitalize physical energy.
                The multipurpose hall hosts various occasions, functions, and entertainment
                activities for all residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DailyLife
