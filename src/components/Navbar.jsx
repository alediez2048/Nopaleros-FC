import { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'About', href: '#about' },
        { label: 'Squad', href: '#squad' },
        { label: 'Fixtures', href: '#fixtures' },
        { label: 'Shop', href: '#shop' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                {/* Logo */}
                <a href="#" className="navbar-logo">
                    <span className="logo-icon">🌵</span>
                    <span className="logo-text">
                        <span className="logo-primary">CD</span>
                        <span className="logo-secondary">NOPALEROS</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="nav-link">
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
                <a href="#join" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                    Join Squad
                </a>
            </div>
        </nav>
    )
}

export default Navbar
