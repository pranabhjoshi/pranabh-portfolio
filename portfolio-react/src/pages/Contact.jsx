import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact-page" className="contact-page">
      <div className="contact-container">
        <img
          src="/images/headshot.jpeg"
          alt="Pranabh Joshi Headshot"
          className="contact-headshot"
        />

        <div className="contact-text">
          <h1>Let’s Connect</h1>
          <p>
            Whether it’s about design, research, or something creative, I’m
            always excited to collaborate and talk ideas. Feel free to reach out
            or explore my work below.
          </p>

          <div className="contact-links">
            <a href="mailto:pranabh@uw.edu" className="contact-link">
              📧 pranabh@uw.edu
            </a>
            <a
              href="https://linkedin.com/in/pranabh-joshi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/pranabhjoshi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
