import { Link } from "react-router-dom";

function Writing() {
    return (
        <div className="container">
            <Link to="/" className="back-link">← Back to Home</Link>
            <section id="writing">
                <div className="project-grid">
                    <div className="project-card">
                        <h3>The Impact of Immigrant Workers: America's O-line</h3>
                        <p>An in-depth analysis of how immigrant workers contribute to the American economy and society.</p>
                        <p style={{ color: 'var(--color-secondary)' }}>Coming soon!</p>
                        <span className="project-tag" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>Research</span>
                    </div>
                    
                    <Link to="/future-foreign-policy" className="project-card">
                        <h3>The Future of American Foreign Policy</h3>
                        <p>Research analysis on how AI, innovation, and democratic accountability shape U.S. leadership in the modern world.</p>
                        <span className="project-tag" style={{ backgroundColor: 'var(--color-tertiary)' }}>Analysis</span>
                    </Link>
                    
                    <div className="project-card">
                        <h3>Congressional Committee Effectiveness</h3>
                        <p>Examining the role and impact of congressional committees in the U.S. legislative process.</p>
                        <p style={{ color: 'var(--color-secondary)' }}>Coming soon!</p>
                        <span className="project-tag" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>Political Science</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Writing;