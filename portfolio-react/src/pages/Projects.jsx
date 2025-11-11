import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="container">
      <Link to="/" className="back-link">← Back to Home</Link>
      <section id="projects">
        <div className="project-grid">
          <Link to="/sea-here" className="project-card">
            <h3>Sea Here</h3>
            <p>React app that lets visitors explore marine life at local aquariums.</p>
            <span className="project-tag" style={{ backgroundColor: 'var(--color-tertiary)' }}>UI/UX Design</span>
          </Link>

          <Link to="/actup" className="project-card">
            <h3>ActUp</h3>
            <p>Platform for tracking and boosting local volunteer engagement.</p>
            <span className="project-tag" style={{ backgroundColor: 'var(--color-secondary)' }}>Product Design</span>
          </Link>

          <Link to="/ginger" className="project-card">
            <h3>Ginger</h3>
            <p>Strava-and-Pinterest-style social media app for cooking.</p>
            <span className="project-tag" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>Mobile Design</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Projects;
