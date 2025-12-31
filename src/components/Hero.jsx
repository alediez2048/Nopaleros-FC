import { useEffect, useRef } from 'react'
import './Hero.css'

const Hero = () => {
    const heroRef = useRef(null)

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!heroRef.current) return
            const { clientX, clientY } = e
            const { innerWidth, innerHeight } = window
            const x = (clientX / innerWidth - 0.5) * 20
            const y = (clientY / innerHeight - 0.5) * 20
            heroRef.current.style.setProperty('--mouse-x', `${x}px`)
            heroRef.current.style.setProperty('--mouse-y', `${y}px`)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section className="hero" ref={heroRef}>
            {/* Background Video/Image */}
            <div className="hero-media">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920&q=80"
                >
                    <source
                        src="https://cdn.coverr.co/videos/coverr-soccer-ball-on-grass-2200/1080p.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="hero-overlay"></div>
            </div>

            {/* Content */}
            <div className="hero-content">
                <div className="hero-badge">
                    <span>EST. 2020</span>
                    <span className="divider">•</span>
                    <span>AUSTIN, TX</span>
                </div>

                <h1 className="hero-title">
                    <span className="title-line title-line-1">CLUB</span>
                    <span className="title-line title-line-2">DEPORTIVO</span>
                    <span className="title-line title-line-3 text-gradient">NOPALEROS</span>
                </h1>

                <p className="hero-tagline">
                    Siempre Espinosos — Stay Pricked Up
                </p>

                <div className="hero-cta">
                    <a href="#join" className="btn btn-primary">
                        Join the Squad
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                    <a href="#fixtures" className="btn btn-outline">
                        View Fixtures
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll">
                <span>Scroll</span>
                <div className="scroll-line"></div>
            </div>

            {/* Stats Strip */}
            <div className="hero-stats">
                <div className="stat">
                    <span className="stat-value">3-2</span>
                    <span className="stat-label">Last Match</span>
                </div>
                <div className="stat">
                    <span className="stat-value">1st</span>
                    <span className="stat-label">AMSA D3</span>
                </div>
                <div className="stat">
                    <span className="stat-value">24</span>
                    <span className="stat-label">Squad Size</span>
                </div>
            </div>
        </section>
    )
}

export default Hero
