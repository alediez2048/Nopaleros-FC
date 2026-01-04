import { useInView } from '../hooks/useInView'
import './About.css'

const About = () => {
    const [sectionRef, isVisible] = useInView({ threshold: 0.2 })

    return (
        <section id="about" className={`about ${isVisible ? 'in-view' : ''}`} ref={sectionRef}>
            <div className="about-container">
                {/* Original Quote */}
                <div className="about-quote">
                    <blockquote className="quote-block">
                        UN DOMINGO LLENO DE <span className="highlight">GOLES,</span><br />
                        <span className="highlight">CERVEZAS</span> Y <span className="highlight">VIBRAS.</span>
                    </blockquote>
                </div>

                {/* Content Grid */}
                <div className="about-grid">
                    {/* Left Column - Image */}
                    <div className="about-image">
                        <div className="image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80"
                                alt="Soccer team celebration"
                            />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="image-label">EST. 2020</div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="about-content">
                        <span className="section-subtitle">THE STORY</span>
                        <h2 className="section-title">
                            MORE THAN<br />
                            <span className="text-stroke">A CLUB</span>
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
                                bring the same energy: <em>Siempre Espinosos.</em>
                            </p>
                        </div>

                        <div className="about-values">
                            <div className="value">
                                <span className="value-number">01</span>
                                <div className="value-text">
                                    <h4>COMPETE</h4>
                                    <p>Every Sunday, we leave it all on the pitch.</p>
                                </div>
                            </div>
                            <div className="value">
                                <span className="value-number">02</span>
                                <div className="value-text">
                                    <h4>STAY PRICKLY</h4>
                                    <p>Sharp on the field, warm off it.</p>
                                </div>
                            </div>
                            <div className="value">
                                <span className="value-number">03</span>
                                <div className="value-text">
                                    <h4>BROTHERHOOD</h4>
                                    <p>Footy, family, food. In that order on match day.</p>
                                </div>
                            </div>
                        </div>

                        <a href="#join" className="btn btn-primary" style={{ marginTop: '3rem' }}>
                            JOIN THE SQUAD
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
