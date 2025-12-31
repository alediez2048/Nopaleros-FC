import './Sponsors.css'

const sponsors = [
    { name: 'Shiner Beer', logo: '🍺' },
    { name: 'Mundial Mag', logo: '📖' },
    { name: 'The Icarus Cup', logo: '🏆' },
    { name: 'AMSA', logo: '⚽' },
    { name: 'Shiner Beer', logo: '🍺' },
    { name: 'Mundial Mag', logo: '📖' },
    { name: 'The Icarus Cup', logo: '🏆' },
    { name: 'AMSA', logo: '⚽' },
]

const Sponsors = () => {
    return (
        <section className="sponsors">
            <div className="sponsors-container">
                <span className="sponsors-label">Supported By</span>
                <div className="sponsors-track">
                    <div className="sponsors-list">
                        {sponsors.map((sponsor, index) => (
                            <div key={index} className="sponsor-item">
                                <span className="sponsor-logo">{sponsor.logo}</span>
                                <span className="sponsor-name">{sponsor.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors
