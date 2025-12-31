import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Sponsors from './components/Sponsors'
import Roster from './components/Roster'

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Hero />
      <Sponsors />
      <main>
        {/* About / Philosophy Section will go here */}
        <section style={{ padding: '4rem 0', textAlign: 'center' }}>
          <h2 style={{ color: 'var(--color-neon)', marginBottom: '1rem' }}>Siempre Espinosos</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.5rem', opacity: 0.8 }}>
            "Winning is not for everyone."
          </p>
        </section>
        <Roster />
      </main>
      <footer style={{ padding: '2rem', textAlign: 'center', borderTop: '1px solid #333', marginTop: '4rem' }}>
        <p>© 2025 Club Deportivo Nopaleros. Stay Pricked Up.</p>
      </footer>
    </div>
  )
}

export default App
