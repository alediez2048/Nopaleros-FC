import './About.css'

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-container">
                {/* Left Column - Image */}
                <div className="about-image">
                    <div className="image-wrapper">
                        <img
                            src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80"
                            alt="Soccer team celebration"
                        />
                        <div className="image-accent"></div>
                    </div>
                    <div className="about-stat-card">
                        <span className="stat-number">5</span>
                        <span className="stat-text">Seasons Strong</span>
                    </div>
                </div>

                {/* Right Column - Content */}
                <div className="about-content">
                    <span className="section-subtitle">Our Story</span>
                    <h2 className="section-title">
                        More Than<br />
                        <span className="text-gradient">A Club</span>
                    </h2>

                    <div className="about-text">
                        <p>
                            Founded in Austin, Texas in 2020, Club Deportivo Nopaleros was born from a simple idea:
                            <strong> footy, family, and food</strong>. What started as a group of friends kicking
                            a ball around has grown into a brotherhood that competes at the highest level of
                            Austin's men's soccer scene.
                        </p>
                        <p>
                            We're not just about the wins—though we do love those. We're about the post-match
                            <strong> Shiner beers</strong>, the <strong>fajita tacos</strong>, and the memories
                            we create together. From AMSA Division 3 to the Icarus Cup in Philadelphia, we
                            bring the same energy: <em>Siempre Espinosos</em>.
                        </p>
                    </div>

                    <div className="about-values">
                        <div className="value">
                            <div className="value-icon">⚽</div>
                            <div className="value-text">
                                <h4>Compete</h4>
                                <p>Winning isn't for everyone.</p>
                            </div>
                        </div>
                        <div className="value">
                            <div className="value-icon">🌵</div>
                            <div className="value-text">
                                <h4>Stay Prickly</h4>
                                <p>Sharp on the pitch, warm off it.</p>
                            </div>
                        </div>
                        <div className="value">
                            <div className="value-icon">🤝</div>
                            <div className="value-text">
                                <h4>Brotherhood</h4>
                                <p>Family first, always.</p>
                            </div>
                        </div>
                    </div>

                    <a href="#join" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About
