import { useState } from 'react'
import './Roster.css'

const players = [
    {
        name: 'Homero',
        position: 'ST',
        number: 9,
        rating: 92,
        nationality: '🇲🇽',
        stats: { pace: 89, shooting: 94, passing: 78, dribbling: 88, defense: 35, physical: 78 },
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80'
    },
    {
        name: 'Greyson',
        position: 'CM',
        number: 8,
        rating: 91,
        nationality: '🇺🇸',
        stats: { pace: 88, shooting: 85, passing: 90, dribbling: 87, defense: 82, physical: 85 },
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80'
    },
    {
        name: 'Kevin',
        position: 'CAM',
        number: 10,
        rating: 89,
        nationality: '🇲🇽',
        stats: { pace: 85, shooting: 84, passing: 92, dribbling: 89, defense: 45, physical: 70 },
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80'
    },
    {
        name: 'Maneel',
        position: 'CB',
        number: 4,
        rating: 88,
        nationality: '🇮🇳',
        stats: { pace: 78, shooting: 40, passing: 75, dribbling: 72, defense: 90, physical: 86 },
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80'
    },
    {
        name: 'Matias',
        position: 'MGR',
        number: 23,
        rating: 99,
        nationality: '🇦🇷',
        stats: { pace: 70, shooting: 80, passing: 99, dribbling: 85, defense: 60, physical: 80 },
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80'
    },
    {
        name: 'Sebastian',
        position: 'RW',
        number: 7,
        rating: 90,
        nationality: '🇲🇽',
        stats: { pace: 95, shooting: 86, passing: 82, dribbling: 91, defense: 42, physical: 68 },
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80'
    },
]

const Roster = () => {
    const [activeCard, setActiveCard] = useState(null)

    return (
        <section id="squad" className="roster">
            <div className="roster-container">
                <div className="roster-header">
                    <div>
                        <span className="section-subtitle">The Squad</span>
                        <h2 className="section-title">
                            The Prickly<br />
                            <span className="text-gradient">Posse</span>
                        </h2>
                    </div>
                    <p className="roster-description">
                        Meet the warriors who wear the Nopal with pride. Built different. Always prickly.
                    </p>
                </div>

                <div className="roster-grid">
                    {players.map((player, index) => (
                        <div
                            key={player.name}
                            className={`player-card ${activeCard === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            {/* Card Glow */}
                            <div className="card-glow"></div>

                            {/* Card Inner */}
                            <div className="card-inner">
                                {/* Top Section */}
                                <div className="card-header">
                                    <div className="player-rating">
                                        <span className="rating-number">{player.rating}</span>
                                        <span className="rating-position">{player.position}</span>
                                    </div>
                                    <span className="player-nationality">{player.nationality}</span>
                                </div>

                                {/* Player Image */}
                                <div className="player-image">
                                    <img src={player.image} alt={player.name} />
                                    <div className="image-overlay"></div>
                                </div>

                                {/* Player Info */}
                                <div className="player-info">
                                    <span className="player-number">#{player.number}</span>
                                    <h3 className="player-name">{player.name}</h3>
                                </div>

                                {/* Stats */}
                                <div className="player-stats">
                                    <div className="stat-item">
                                        <span className="stat-value">{player.stats.pace}</span>
                                        <span className="stat-label">PAC</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">{player.stats.shooting}</span>
                                        <span className="stat-label">SHO</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">{player.stats.passing}</span>
                                        <span className="stat-label">PAS</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">{player.stats.dribbling}</span>
                                        <span className="stat-label">DRI</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">{player.stats.defense}</span>
                                        <span className="stat-label">DEF</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">{player.stats.physical}</span>
                                        <span className="stat-label">PHY</span>
                                    </div>
                                </div>
                            </div>

                            {/* Holographic Effect */}
                            <div className="card-holo"></div>
                        </div>
                    ))}
                </div>

                <div className="roster-cta">
                    <a href="#join" className="btn btn-outline">
                        View Full Roster
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Roster
