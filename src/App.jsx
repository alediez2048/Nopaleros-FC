import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Roster from './components/Roster'
import Fixtures from './components/Fixtures'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app noise-overlay">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Roster />
        <Fixtures />
        <Sponsors />
      </main>
      <Footer />
    </div>
  )
}

export default App
