import React, { useState, useEffect } from 'react'
import crest from '../assets/images/crest.png'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none'
        }}>
            <div className="logo-container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={crest} alt="Club Deportivo Nopaleros Crest" style={{ height: '60px', filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.5))' }} />
                <span style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '1.25rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    display: scrolled ? 'block' : 'none' // Hide text initially if desired, or keep it. Let's keep specific branding logic simple.
                }}>
                    CD Nopaleros
                </span>
            </div>

            <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
                {['Squad', 'Fixtures', 'Shop', 'Join'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        fontSize: '1rem',
                        letterSpacing: '0.1em',
                        position: 'relative',
                        padding: '0.5rem 0'
                    }}>
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
