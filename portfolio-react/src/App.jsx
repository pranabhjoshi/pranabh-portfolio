import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";
import About from "./pages/About";

import "./App.css";

export default function App() {
  return (
    <>      
      {/* MAIN Div */}
      <main> 
        
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero-left">
            <p className="tagline">Hi, I'm Pranabh</p>
            <p className="tagline">Joshi</p>

            <p className="aspiration">
              <span className="highlight-role">Product Designer</span> & <span className="highlight-role">Political Scientist</span>
            </p>

            <p className="brand-statement"><em>Design shapes our world, Politics defines it</em></p>

            <a href="/projects" className="view-work">
            <strong>View my work -{">"}</strong>
            </a>
          </div> 

          <div className="hero-left">
            <img 
              src="/images/headshot2.jpeg" 
              alt="Pranabh Joshi" 
              className="hero-photo"
            />
          </div>
        </section>


        {/* PROJECTS PREVIEW
        <section id="projects-preview" className="preview-section">
          <h2>Featured Projects</h2>
          <a href="/projects" className="view-more">View All Projects →</a>
          <Projects /> 
          
        </section> */}

        {/* WRITING PREVIEW
        <section id="writing-preview" className="preview-section">
          <h2>Recent Writing</h2>
          <a href="/projects" className="view-more">View All Writing →</a>
          <Writing />
          
        </section> */}

        {/* ABOUT SNIPPET */}
        <section id="about-preview" className="preview-section">
          {/* <h2>About Me</h2> */}
          <About />
        </section>

      </main>
    </>
  );
}
