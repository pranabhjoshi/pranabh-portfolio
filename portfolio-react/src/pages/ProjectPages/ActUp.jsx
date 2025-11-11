import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./ProjectPage.css";

import resources from "../../assets/actup/resources.png";

export default function ActUp() {
  return (
    <div className="project-page">
      <header className="project-header">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        <h1>ActUp</h1>
        <p className="subtitle">
          A civic-tech platform that makes local volunteering more social,
          trackable, and rewarding.
        </p>
      </header>

      <section className="project-summary">
        <p>
          ActUp was built to reimagine how we show up for our communities.
          Volunteering often feels invisible — people take action, but their
          efforts rarely translate into ongoing engagement. I wanted to change
          that by creating a platform that celebrates consistency and makes
          participation feel social, fun, and visible.
        </p>
        <p>
          The vision: a <strong>habit-forming civic app</strong> that turns small
          acts into ongoing community impact. From streaks and reflections to
          built-in discovery tools, ActUp transforms civic duty into an
          approachable, shareable experience.
        </p>
      </section>

      {/* Wide hero image for Resources page (full image shown) */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "2rem auto 1rem auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8f9fb",
          borderRadius: "12px",
          overflow: "hidden",
          padding: "1rem",
        }}
      >
        <img
          src={resources}
          alt="ActUp Resources Page — civic engagement tools"
          loading="lazy"
          style={{
            width: "100%",
            height: "auto",
            maxHeight: "75vh", // prevent it from taking over the entire viewport
            objectFit: "contain", // ✅ shows full image, no cropping
            borderRadius: "8px",
          }}
        />
      </div>
      
      <p className="image-title">
        Resources: quick access to voter tools, representatives, and events.
      </p>

      <section className="design-process">
        <h2>Design Process</h2>

        <div className="process-step">
          <h3>Problem Framing</h3>
          <p>
            Students want to participate civically but struggle to maintain
            motivation after one-off events. Most existing tools are
            transactional, missing emotional reinforcement or peer recognition.
          </p>
        </div>

        <div className="process-step">
          <h3>Research & Insights</h3>
          <p>
            Interviews with student leaders and nonprofit volunteers revealed
            that users stay engaged when they can <em>see progress</em> and feel
            part of a community. That led to a design model centered on{" "}
            <strong>feedback loops, accountability, and social proof.</strong>
          </p>
        </div>

        <div className="process-step">
          <h3>Engagement-Driven Design</h3>
          <ul>
            <li>
              <strong>Resources hub:</strong> lowers the barrier to entry for
              action (register, contact reps, find events).
            </li>
            <li>
              <strong>Progress tracking:</strong> makes community impact
              tangible through hours, reflections, and badges.
            </li>
            <li>
              <strong>Social visibility:</strong> turns volunteering into a
              shareable, rewarding experience.
            </li>
          </ul>
        </div>

        <div className="process-step">
          <h3>Visual Design</h3>
          <p>
            Bright gradients and card edges reinforce positivity and motion.
            ActUp’s design borrows from productivity apps but keeps the tone
            civic, not corporate — encouraging contribution without competition.
          </p>
        </div>

        <div className="process-step">
          <h3>Prototype & Reflection</h3>
          <p>
            Built with <strong>React + Firebase</strong> for real-time sync and
            user data persistence. Testers appreciated that it “made civic
            action feel more doable.” Next steps: expand to team-based
            challenges and gamified impact metrics.
          </p>
        </div>
      </section>

      <footer className="project-header">
        <Link to="/projects" className="back-link bottom">← Back to Projects</Link>
      </footer>
    </div>
  );
}
