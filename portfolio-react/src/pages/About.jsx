import "./About.css";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <img
          src="/images/headshot.jpeg"
          alt="Pranabh Joshi Headshot"
          className="about-headshot"
        />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hi! I’m <strong>Pranabh Joshi</strong> — a designer, developer, and
            political science student at the University of Washington. I love
            building projects that bridge technology, policy, and design to make
            information more accessible and engaging.
          </p>
          <p>
            Whether I’m designing civic tech tools, researching AI governance,
            or coding creative prototypes, I’m driven by curiosity and impact.
            This portfolio brings together my academic work, design projects,
            and a few passion ideas that keep me learning.
          </p>
          <a href="/assets/Pranabh_Joshi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
            View Resume →
          </a>
        </div>
      </div>
    </section>
  );
}
