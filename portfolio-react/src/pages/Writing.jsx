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

function Writing({ deviceType }) {
  return (
    <section id="writing">
      <h2 className="section-title">WRITING</h2>
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
          <div className="project-card">
            <h3>Information in NBA Terms</h3>
            <p>A breakdown of how analytics changed basketball and the world around it, using Jokic and Shai as the perfect case studies.</p>
            <p style={{ color: 'var(--color-secondary)' }}>Coming soon!</p>
            <span className="project-tag" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>Political Science</span>
          </div>

          <div className="project-card">
            <h3>The Impact of Immigrant Workers: America's O-line</h3>
            <p>An in-depth analysis of how immigrant workers contribute to the American economy and society.</p>
            <p style={{ color: 'var(--color-secondary)' }}>Coming soon!</p>
            <span className="project-tag" style={{ backgroundColor: 'var(--color-secondary)', color: 'white' }}>Research</span>
          </div>

          <Link to="/future-foreign-policy" className="project-card">
            <h3>The Future of American Foreign Policy</h3>
            <p>Research analysis on how AI, innovation, and democratic accountability shape U.S. leadership in the modern world.</p>
            <span className="project-tag" style={{ backgroundColor: 'var(--color-tertiary)' }}>Analysis</span>
          </Link>
        </Carousel>
      </div>
    </section>
  );
}

Writing.propTypes = {
  deviceType: PropTypes.string,
};

export default Writing;