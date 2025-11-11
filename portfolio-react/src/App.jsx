import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";
import About from "./pages/About";

import "./App.css";

export default function App() {
  return (
    <>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <p className="tagline">Product Designer & Political Scientist</p>
        <a href="/resume" className="resume-button">View Résumé</a>
      </section>

      {/* PROJECTS PREVIEW */}
      <section id="projects-preview" className="preview-section">
        <h2>Featured Projects</h2>
        <Projects limit={2} /> 
        <a href="/projects" className="view-more">View All Projects →</a>
      </section>

      {/* WRITING PREVIEW */}
      <section id="writing-preview" className="preview-section">
        <h2>Recent Writing</h2>
        <Writing limit={1} />
        <a href="/writing" className="view-more">View All Writing →</a>
      </section>

      {/* ABOUT SNIPPET */}
      <section id="about-preview" className="preview-section">
        <h2>About Me</h2>
        <p>
          I’m a junior at the University of Washington, double-majoring in Informatics 
          and Political Science. I design equitable systems that connect people, data, 
          and policy. 
        </p>
        <a href="/about" className="view-more">Learn More →</a>
      </section>
      
    </>
  );
}
