import { useState, useEffect, useRef } from 'react'
import crest from '../assets/images/crest.png'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')
    const [scrollProgress, setScrollProgress] = useState(0)
    const touchStartRef = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            // Scrolled state
            setScrolled(window.scrollY > 100)

            // Scroll progress
            const winScroll = document.documentElement.scrollTop
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = (winScroll / height) * 100
            setScrollProgress(scrolled)

            // Active section detection
            const sections = ['about', 'squad', 'fixtures', 'shop']
            const current = sections.find(section => {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    return rect.top <= 150 && rect.bottom >= 150
                }
                return false
            })
            setActiveSection(current || '')
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Mobile swipe gesture for closing menu
    useEffect(() => {
        if (!menuOpen) return

        const handleTouchStart = (e) => {
            touchStartRef.current = e.touches[0].clientX
        }

        const handleTouchEnd = (e) => {
            const touchEnd = e.changedTouches[0].clientX
            const diff = touchStartRef.current - touchEnd

            // Swipe right to left to close (or just tap outside)
            if (diff > 50 || diff < -50) {
                setMenuOpen(false)
            }
        }

        const mobileMenu = document.querySelector('.navbar-mobile')
        if (mobileMenu) {
            mobileMenu.addEventListener('touchstart', handleTouchStart)
            mobileMenu.addEventListener('touchend', handleTouchEnd)
        }

        return () => {
            if (mobileMenu) {
                mobileMenu.removeEventListener('touchstart', handleTouchStart)
                mobileMenu.removeEventListener('touchend', handleTouchEnd)
            }
        }
    }, [menuOpen])

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Squad', href: '#squad' },
        { label: 'Fixtures', href: '#fixtures' },
        { label: 'Shop', href: '#shop' },
    ]

    return (
        <>
            {/* Scroll Progress Bar */}
            <div
                className="scroll-progress"
                style={{ width: `${scrollProgress}%` }}
            ></div>

            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navbar-container">
                    {/* Logo */}
                    <a href="#" className="navbar-logo">
                        <img src={crest} alt="CD Nopaleros" className="logo-crest" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="navbar-links">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="navbar-cta">
                        <a href="#join" className="btn btn-primary">
                            Join Squad
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="mobile-link"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#join" className="btn btn-primary" style={{ marginTop: '2rem', minHeight: '56px' }}>
                        Join Squad
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar
