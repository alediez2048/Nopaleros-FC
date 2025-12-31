import React from 'react'

const players = [
    { name: 'GREYSON', role: 'CM', rating: 91, stats: { pac: 88, sho: 85, pas: 90, dri: 87, def: 82, phy: 85 }, image: null },
    { name: 'KEVIN', role: 'CAM', rating: 89, stats: { pac: 85, sho: 84, pas: 92, dri: 89, def: 45, phy: 70 }, image: null },
    { name: 'MANEEL', role: 'CB', rating: 88, stats: { pac: 78, sho: 40, pas: 75, dri: 72, def: 90, phy: 86 }, image: null },
    { name: 'HOMERO', role: 'ST', rating: 92, stats: { pac: 89, sho: 94, pas: 78, dri: 88, def: 35, phy: 78 }, image: null },
    { name: 'MATIAS', role: 'MGR', rating: 99, stats: { pac: 70, sho: 80, pas: 99, dri: 85, def: 60, phy: 80 }, image: null },
    { name: 'JORGE', role: 'RW', rating: 86, stats: { pac: 92, sho: 81, pas: 78, dri: 86, def: 40, phy: 65 }, image: null },
]

const Roster = () => {
    return (
        <section id="squad" style={{ padding: '4rem 2rem', background: 'var(--color-dark)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '3rem', color: 'var(--color-white)' }}>
                THE <span className="text-gradient">PRICKLY POSSE</span>
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginTop: '2rem'
            }}>
                {players.map((player) => (
                    <div key={player.name} className="fut-card" style={{
                        position: 'relative',
                        width: '240px',
                        height: '360px',
                        margin: '0 auto',
                        background: `radial-gradient(circle at 50% 0, var(--color-gold), var(--color-primary))`,
                        borderRadius: '1.5rem',
                        padding: '1rem',
                        boxShadow: '0 0 15px rgba(0,0,0,0.5)',
                        border: '2px solid #d4af37',
                        color: '#1a1a1a',
                        overflow: 'hidden',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        cursor: 'pointer'
                    }}>
                        {/* Gloss Effect */}
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(125deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.1) 100%)',
                            zIndex: 2,
                            pointerEvents: 'none'
                        }} />

                        {/* Rating & Position */}
                        <div style={{ position: 'absolute', top: '2rem', left: '1.5rem', textAlign: 'center', zIndex: 3 }}>
                            <div style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>{player.rating}</div>
                            <div style={{ fontSize: '1rem', fontWeight: 600 }}>{player.role}</div>
                            <div style={{ width: '30px', height: '2px', background: 'rgba(0,0,0,0.5)', margin: '4px auto' }} />
                            <span style={{ fontSize: '1.5rem' }}>🇲🇽</span>
                        </div>

                        {/* Player Image Placeholder */}
                        <div style={{
                            position: 'absolute',
                            top: '3.5rem',
                            right: '1rem',
                            width: '140px',
                            height: '140px',
                            background: 'rgba(0,0,0,0.2)',
                            borderRadius: '50%', // Or silhouette cut out
                            zIndex: 1,
                            filter: 'drop-shadow(5px 5px 5px rgba(0,0,0,0.3))'
                        }}>
                            {/* Image would go here */}
                        </div>

                        {/* Name */}
                        <div style={{
                            position: 'absolute',
                            bottom: '35%',
                            left: 0,
                            width: '100%',
                            textAlign: 'center',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 900,
                            fontSize: '1.5rem',
                            textTransform: 'uppercase',
                            zIndex: 3,
                            letterSpacing: '0.05em'
                        }}>
                            {player.name}
                        </div>

                        {/* Stats Divider */}
                        <div style={{
                            position: 'absolute',
                            bottom: '30%',
                            left: '10%',
                            width: '80%',
                            height: '1px',
                            background: 'rgba(0,0,0,0.3)',
                            zIndex: 3
                        }} />

                        {/* Stats Grid */}
                        <div style={{
                            position: 'absolute',
                            bottom: '2rem',
                            left: '1rem',
                            right: '1rem',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '0.25rem',
                            fontSize: '0.9rem',
                            fontWeight: 700,
                            zIndex: 3
                        }}>
                            <div>{player.stats.pac} PAC</div>
                            <div>{player.stats.dri} DRI</div>
                            <div>{player.stats.sho} SHO</div>
                            <div>{player.stats.def} DEF</div>
                            <div>{player.stats.pas} PAS</div>
                            <div>{player.stats.phy} PHY</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dynamic Style for Hover */}
            <style>{`
        .fut-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 10px 30px rgba(0, 255, 133, 0.4);
        }
      `}</style>
        </section>
    )
}

export default Roster
