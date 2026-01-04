import { useEffect, useRef } from 'react'
import heroVideo from '../assets/Video/4440941-hd_1920_1080_25fps.mp4'
import './Hero.css'

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            const x = (clientX / innerWidth - 0.5) * 30
            const y = (clientY / innerHeight - 0.5) * 30
            heroRef.current.style.setProperty('--mouse-x', `${x}px`)
            heroRef.current.style.setProperty('--mouse-y', `${y}px`)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="hero" ref={heroRef}>
            {/* Background */}
            <div className="hero-media">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={heroVideo}
                />
                <div className="hero-overlay"></div>
                <div className="hero-grain"></div>
            </div>

            {/* Side Text */}
            <div className="hero-side-text">
                <span>SIEMPRE</span>
                <span>ESPINOSOS</span>
                <span className="accent">🌵</span>
            </div>

            {/* Main Content */}
            <div className="hero-content">
                {/* Badge */}
                <div className="hero-badge">
                    EST. 2020 — AUSTIN, TX
                </div>

                {/* Massive Title with Glitch */}
                <h1 className="hero-title">
                    <span className="title-line small">CLUB DEPORTIVO</span>
                    <span className="title-line glitch" data-text="NOPALEROS">NOPALEROS</span>
                </h1>

                {/* Original Tagline */}
                <p className="hero-tagline">
                    <span className="tagline-em">FOOTY, FAMILY, FOOD.</span> <span className="tagline-accent">STAY PRICKED UP.</span>
                </p>

                {/* CTA */}
                <div className="hero-cta">
                    <a href="#join" className="btn btn-primary">
                        JOIN THE SQUAD
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#fixtures" className="btn btn-outline">
                        SEE FIXTURES
                    </a>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="hero-bottom">
                <div className="stat-strip">
                    <div className="stat-item">
                        <span className="stat-value">3-2</span>
                        <span className="stat-label">LAST W</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-value">#1</span>
                        <span className="stat-label">AMSA D3</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <span className="stat-value">24</span>
                        <span className="stat-label">PRICKLY POSSE</span>
                    </div>
                </div>

                <div className="scroll-indicator">
                    <span>SCROLL</span>
                    <div className="scroll-line"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
