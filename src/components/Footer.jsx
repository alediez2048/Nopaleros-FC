import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Top Section */}
                <div className="footer-top">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-icon">🌵</span>
                            <div className="logo-text">
                                <span className="logo-primary">Club Deportivo</span>
                                <span className="logo-secondary">Nopaleros</span>
                            </div>
                        </div>
                        <p className="footer-tagline">
                            Siempre Espinosos — Stay Pricked Up
                        </p>
                    </div>

                    {/* Links */}
                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Club</h4>
                            <a href="#about">About</a>
                            <a href="#squad">Squad</a>
                            <a href="#fixtures">Fixtures</a>
                            <a href="#">History</a>
                        </div>
                        <div className="link-group">
                            <h4>Fan Zone</h4>
                            <a href="#">Shop</a>
                            <a href="#">Tickets</a>
                            <a href="#">Gallery</a>
                            <a href="#">News</a>
                        </div>
                        <div className="link-group">
                            <h4>Connect</h4>
                            <a href="https://instagram.com/cdnopaleros" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="#">Twitter</a>
                            <a href="#">Contact</a>
                            <a href="#join">Join Squad</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} Club Deportivo Nopaleros. All rights reserved.
                    </p>
                    <p className="credit">
                        Austin, Texas • Est. 2020
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
