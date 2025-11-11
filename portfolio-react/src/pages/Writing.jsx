import { Link } from "react-router-dom";

function Writing() {
    return (
        <section id="writing">
          <div className="project-grid">
            <div className="project-card">
              <h3>The impact of immigrant workers: America's O-line</h3>
              <p>Coming soon...</p>
            </div>
            <Link to="/future-foreign-policy" className="project-card">
              <h3>The Future of American Foreign Policy</h3>
              <p>
                Research analysis on how AI, innovation, and democratic accountability
                shape U.S. leadership in the modern world.
              </p>
            </Link>
            <div className="project-card">
              <h3>Congressional Committee Effectiveness</h3>
              <p>Coming soon...</p>
            </div>
          </div>
        </section>
    )
}

export default Writing;