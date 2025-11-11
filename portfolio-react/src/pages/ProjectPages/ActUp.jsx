import { Link } from "react-router-dom";
import "./ProjectPage.css";

export default function ActUp() {
  return (
    <div className="project-page">
      <header className="project-header">
        <Link to="/" className="back-link">← Back to Projects</Link>
        <h1>ActUp</h1>
        <p className="subtitle">
          A civic-tech platform that makes local volunteering more social,
          trackable, and rewarding.
        </p>
      </header>

      <section className="project-summary">
        <p>
          ActUp was born from the realization that civic engagement often feels
          invisible — people volunteer, but their impact rarely carries forward.
          I wanted to build a tool that celebrates everyday action and helps
          communities organize around shared causes.
        </p>
        <p>
          The platform allows users to <strong>log volunteer hours, earn
          streaks, post reflections,</strong> and connect with peers doing
          similar work. It’s like a social feed for good deeds — blending
          accountability with storytelling to sustain engagement.
        </p>
      </section>

      <section className="design-process">
        <h2>Design Process</h2>

        <div className="process-step">
          <h3>Problem Framing</h3>
          <p>
            Many students and young adults want to contribute but lose momentum
            without visible progress or community feedback. Existing volunteer
            apps are transactional and uninspiring.
          </p>
        </div>

        <div className="process-step">
          <h3>Research & Insights</h3>
          <p>
            Through interviews with student organizations and local nonprofits,
            I found that people stay engaged when they can <em>see</em> their
            impact and share it. This informed a design goal of balancing data
            (hours, streaks) with emotion (reflections, photos, stories).
          </p>
        </div>

        <div className="process-step">
          <h3>Concept & Ideation</h3>
          <p>
            Early concepts explored leaderboards, progress maps, and community
            feeds. The final design combines these ideas into a 
            <strong>journal-style dashboard</strong> that tracks activity and
            encourages consistency.
          </p>
        </div>

        <div className="process-step">
          <h3>Visual Design</h3>
          <p>
            ActUp uses bold accent colors (orange and violet) to convey energy
            and motivation. Cards and rounded progress rings emphasize momentum,
            while typography keeps the interface approachable and clean.
          </p>
        </div>

        <div className="process-step">
          <h3>Prototype & Reflection</h3>
          <p>
            Built in <strong>React + Firebase</strong> for real-time sync and
            persistent user data. Testers said ActUp made volunteering feel like
            “closing your Apple Watch rings, but for doing good.” Next steps:
            integrate local event APIs and group challenges.
          </p>
        </div>
      </section>

      <footer className="project-footer">
        <Link to="/" className="back-link bottom">← Back to Projects</Link>
      </footer>
    </div>
  );
}
