import { useInView } from '../hooks/useInView'
import './Fixtures.css'

const matches = [
    {
        id: 1,
        status: 'completed',
        competition: 'AMSA D3',
        date: 'Dec 22',
        homeTeam: 'CD Nopaleros',
        homeScore: 3,
        awayTeam: 'No Parking FC',
        awayScore: 2,
        homeLogo: '🌵',
        awayLogo: '🚗',
    },
    {
        id: 2,
        status: 'upcoming',
        competition: 'AMSA D3',
        date: 'Jan 5',
        homeTeam: 'CD Nopaleros',
        homeScore: null,
        awayTeam: 'Sporting CM',
        awayScore: null,
        homeLogo: '🌵',
        awayLogo: '⚽',
    },
    {
        id: 3,
        status: 'upcoming',
        competition: 'AMSA D3',
        date: 'Jan 12',
        homeTeam: 'VTX United',
        homeScore: null,
        awayTeam: 'CD Nopaleros',
        awayScore: null,
        homeLogo: '🦅',
        awayLogo: '🌵',
    },
]

const Fixtures = () => {
    const [sectionRef, isVisible] = useInView({ threshold: 0.15 })

    return (
        <section id="fixtures" className={`fixtures ${isVisible ? 'in-view' : ''}`} ref={sectionRef}>
            <div className="fixtures-container">
                <div className="fixtures-header">
                    <div>
                        <span className="section-subtitle">Match Center</span>
                        <h2 className="section-title">Fixtures</h2>
                    </div>
                </div>

                <div className="fixtures-list">
                    {matches.map((match, index) => (
                        <div
                            key={match.id}
                            className={`match-card ${match.status}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            {/* Match Meta */}
                            <div className="match-meta">
                                <span className="match-competition">{match.competition}</span>
                                <span className="match-date">{match.date}</span>
                            </div>

                            {/* Match Details */}
                            <div className="match-details">
                                {/* Home Team */}
                                <div className="team home">
                                    <span className="team-logo">{match.homeLogo}</span>
                                    <span className="team-name">{match.homeTeam}</span>
                                </div>

                                {/* Score / VS */}
                                <div className="match-score">
                                    {match.status === 'completed' ? (
                                        <>
                                            <span className="score">{match.homeScore}</span>
                                            <span className="score-divider">-</span>
                                            <span className="score">{match.awayScore}</span>
                                        </>
                                    ) : (
                                        <span className="vs">VS</span>
                                    )}
                                </div>

                                {/* Away Team */}
                                <div className="team away">
                                    <span className="team-name">{match.awayTeam}</span>
                                    <span className="team-logo">{match.awayLogo}</span>
                                </div>
                            </div>

                            {/* Status Badge */}
                            <div className="match-status">
                                {match.status === 'completed' ? (
                                    <span className="status-badge completed">Full Time</span>
                                ) : (
                                    <span className="status-badge upcoming">Upcoming</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="fixtures-cta">
                    <a href="#" className="btn btn-ghost">
                        View All Fixtures →
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Fixtures
