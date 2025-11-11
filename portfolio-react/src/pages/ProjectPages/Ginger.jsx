import { Link } from "react-router-dom";
import "./ProjectPage.css";

export default function Ginger() {
  return (
    <div className="project-page">
      <header className="project-header">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        <h1>Ginger</h1>
        <p className="subtitle">
          A concept app exploring how we can make cooking as social and trackable as fitness.
        </p>
      </header>

      <section className="project-summary">
        <p>
          <strong>Ginger</strong> is a Figma-based concept that reimagines how people share
          their cooking journeys. Instead of focusing on picture-perfect food posts, Ginger
          celebrates the *process* — the messy, spontaneous, human side of cooking.
        </p>
        <p>
          Inspired by <em>Strava</em>’s activity tracking and <em>Pinterest</em>’s visual discovery,
          Ginger encourages users to log dishes, track their “streaks,” and follow friends’
          culinary progress. Think of it as a timeline for your tastebuds.
        </p>
      </section>

      <section className="design-process">
        <h2>Design Focus</h2>

        <div className="process-step">
          <h3>Goal</h3>
          <p>
            Explore how social UX patterns from fitness and hobby tracking apps
            could make home cooking more engaging and community-driven.
          </p>
        </div>

        <div className="process-step">
          <h3>Tools</h3>
          <p>
            Designed entirely in <strong>Figma</strong> using smart components,
            color tokens, and reusable grid layouts to simulate a high-fidelity prototype.
          </p>
        </div>

        <div className="process-step">
          <h3>Visual Style</h3>
          <p>
            The interface uses warm, clay-inspired tones with off-white backgrounds
            to mimic a cozy kitchen feel. Rounded frames, soft shadows, and minimal typography
            create a friendly and scrollable feed layout.
          </p>
        </div>
      </section>

      <section className="mockups">
        <h2>Figma Mockups</h2>
        <p>
          These designs were created as part of an early concept sprint. Future plans
          include adding interactive components and micro-animations to simulate posting,
          liking, and commenting experiences.
        </p>

        {/* Replace image paths below with your exported mockup URLs or local assets */}
        <div className="mockup-gallery">
          <img src="/images/ginger-home.png" alt="Ginger Home Feed Mockup" />
          <img src="/images/ginger-profile.png" alt="Ginger Profile Screen Mockup" />
          <img src="/images/ginger-upload.png" alt="Ginger Upload Post Flow" />
        </div>
      </section>

      <footer className="project-header">
        <Link to="/projects" className="back-link bottom">← Back to Projects</Link>
      </footer>
    </div>
  );
}
