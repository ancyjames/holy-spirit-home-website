import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Facilities from './components/Facilities'
import MedicalCare from './components/MedicalCare'
import DailyLife from './components/DailyLife'
import Admission from './components/Admission'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Facilities />
        <MedicalCare />
        <DailyLife />
        <Admission />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
