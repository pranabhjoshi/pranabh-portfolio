import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import PropTypes from "prop-types";
import "react-multi-carousel/lib/styles.css";
import "./Projects.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Projects({ deviceType }) {
  return (
    <section id="projects">
      <h2 className="section-title">PROJECTS</h2>
      <div className="projects-carousel-section">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={deviceType !== "mobile"}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          >

          {/* SEA HERE */}
          <Link to="/sea-here" className="project-card">
            <h3>🐠 Sea Here</h3>
            <p>React app that lets visitors explore marine life at local aquariums.</p>
            <span className="project-tag">Product Design</span>
            <span className="project-tag">Mobile-First</span>
          </Link>

          {/* ACTUP */}
          <Link to="/actup" className="project-card">
            <h3>⚡ ActUp</h3>
            <p>Platform for tracking and boosting local volunteer engagement.</p>
            <span className="project-tag">Product Design</span>
            <span className="project-tag">Social Impact</span>
          </Link>

          {/* GINGER */}
          <Link to="/ginger" className="project-card">
            <h3>🥘 Ginger</h3>
            <p>Strava-and-Pinterest-style social media app for cooking.</p>
            <span className="project-tag">Mobile-First</span>
            <span className="project-tag">UX Design</span>
          </Link>
        </Carousel>
      </div>
    </section>
      
  );
}

Projects.propTypes = {
  deviceType: PropTypes.string,
};
