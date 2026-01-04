import { useState, useEffect } from 'react'
import './Loader.css'

const Loader = ({ onComplete }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [isExiting, setIsExiting] = useState(false)

    useEffect(() => {
        // Minimum display time for branding
        const minDisplayTime = setTimeout(() => {
            setIsExiting(true)

            // Wait for exit animation
            setTimeout(() => {
                setIsLoading(false)
                onComplete?.()
            }, 600)
        }, 1500)

        return () => clearTimeout(minDisplayTime)
    }, [onComplete])

    if (!isLoading) return null

    return (
        <div className={`loader ${isExiting ? 'exiting' : ''}`}>
            <div className="loader-content">
                {/* Logo */}
                <div className="loader-logo">
                    <span className="loader-icon">🌵</span>
                </div>

                {/* Text */}
                <div className="loader-text">
                    <span className="loader-title">CD NOPALEROS</span>
                    <span className="loader-tagline">Siempre Espinosos</span>
                </div>

                {/* Progress Bar */}
                <div className="loader-progress">
                    <div className="loader-bar"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader
