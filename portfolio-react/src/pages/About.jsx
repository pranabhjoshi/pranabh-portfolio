import "./About.css";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <img
          src="/images/about_pic.JPG"
          alt="Pranabh Joshi at UW Gameday"
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
            Whether I’m designing a mobile-based product in Figma or researching how the AI innovation race is reshaping foreign policy, 
            I’m driven by curiosity and impact.
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
