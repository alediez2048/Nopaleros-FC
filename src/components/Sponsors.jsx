import React from 'react'

const Sponsors = () => {
    const sponsors = [
        "SHINER BEER",
        "MUNDIAL MAG",
        "THE ICARUS CUP",
        "AUSTIN MEN'S SOCCER ASSOCIATION",
        "SHINER BEER", /* Repeat for ticker effect */
        "MUNDIAL MAG",
        "THE ICARUS CUP"
    ];

    return (
        <div style={{
            background: 'var(--color-charcoal)',
            padding: '1.5rem 0',
            borderTop: '1px solid #333',
            borderBottom: '1px solid #333',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative'
        }}>
            <div style={{
                display: 'inline-block',
                animation: 'ticker 20s linear infinite',
            }}>
                {sponsors.map((sponsor, index) => (
                    <span key={index} style={{
                        display: 'inline-block',
                        margin: '0 3rem',
                        fontFamily: 'var(--font-display)',
                        fontWeight: 900,
                        fontSize: '1.5rem',
                        color: 'var(--color-white)',
                        opacity: 0.4,
                        letterSpacing: '0.1em'
                    }}>
                        {sponsor}
                    </span>
                ))}
            </div>
            <style>
                {`
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                `}
            </style>
        </div>
    )
}

export default Sponsors
