import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects">
      <div className="project-grid">

        <Link to="/sea-here" className="project-card">
          <h3>Sea Here</h3>
          <p>React app that lets visitors explore marine life at local aquariums.</p>
        </Link>

        <Link to="/actup" className="project-card">
          <h3>ActUp</h3>
          <p>Platform for tracking and boosting local volunteer engagement.</p>
        </Link>

        <Link to="/ginger" className="project-card">
          <h3>Ginger</h3>
          <p>Strava-and-Pinterest-style social media app for cooking.</p>
        </Link>

      </div>
    </section>
  );
}

export default Projects;
