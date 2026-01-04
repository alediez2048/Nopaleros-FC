import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Roster from './components/Roster'
import Fixtures from './components/Fixtures'
import Sponsors from './components/Sponsors'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './App.css'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      <Loader onComplete={() => setIsLoaded(true)} />
      <div className={`app noise-overlay ${isLoaded ? 'loaded' : ''}`}>
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
    </>
  )
}

export default App
