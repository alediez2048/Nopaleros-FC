import React from 'react'
import heroBg from '../assets/images/hero-bg.png'

const Hero = () => {
    return (
        <div style={{
            position: 'relative',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            {/* Background Layer - Placeholder for Video */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -2,
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), var(--color-dark)), url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* If we had a video, it would go here:
        <video autoPlay loop muted playsInline style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
          <source src="/path/to/video.mp4" type="video/mp4" />
        </video>
        */}
            </div>

            {/* Massive Typography Layer */}
            <h1 className="mega-title" style={{
                position: 'relative',
                zIndex: 1,
                textAlign: 'center',
                mixBlendMode: 'overlay',
                color: 'var(--color-white)',
                opacity: 0.9,
                lineHeight: 0.8
            }}>
                CLUB DEPORTIVO<br />
                <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--color-neon)' }}>NOPALEROS</span>
            </h1>

            {/* Layer interaction helper - Floating elements could go here */}

            {/* CTA Container */}
            <div style={{
                position: 'absolute',
                bottom: '15%',
                display: 'flex',
                gap: '1.5rem',
                zIndex: 10,
                alignItems: 'center'
            }}>
                <button className="btn-primary">
                    Join the Squad
                </button>
                <button className="btn-outline">
                    Buy the Kit
                </button>
                <a href="#fixtures" style={{
                    color: 'var(--color-light)',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                }}>
                    See Fixtures
                </a>
            </div>
        </div>
    )
}

export default Hero
