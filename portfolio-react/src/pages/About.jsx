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
            Hi! I’m <strong>Pranabh Joshi</strong> — an Informatics and 
            Political Science student at the University of Washington. I love
            building projects that bridge technology, policy, and design to make
            information more accessible and engaging. My background in political science 
            sharpens my ability to analyze complex problems, communicate clearly, and approach 
            design challenges with a critical and empathetic mindset.
          </p>
          <p>
            Whether I’m designing a new social media project in Figma or researching how the AI innovation race is reshaping 
            our foreign policy, I’m driven by curiosity and a desire to make a positive impact.
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
