import { Link } from "react-router-dom";
import "./ProjectPage.css";

import mobileShot from "../../assets/sea-here/mobile.png";
import desktopShot from "../../assets/sea-here/desktop.png";
import leopardShark from "../../assets/sea-here/leopard-shark.png";
import giantOctopus from "../../assets/sea-here/giant-octopus.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";


export default function SeaHere() {
  return (
    <div className="project-page">
      <header className="project-header">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        <h1>Sea Here</h1>
        <p className="subtitle">
          A mobile-first aquarium companion app designed to make learning about
          Pacific Northwest marine life accessible, engaging, and memorable.
        </p>
      </header>

      <section className="project-summary">
        <p>
          Growing up, I loved shows like <em>The Wild Kratts</em> and
          <em> Steve Irwin’s The Crocodile Hunter</em>. They made learning about
          wildlife feel like an adventure. I wanted to recreate that same spark
          for today’s kids, starting close to home. The Seattle Aquarium does an
          incredible job connecting people to Pacific Northwest marine life, so
          I designed <strong>Sea Here</strong>, a playful companion app that
          turns real aquarium visits into an interactive learning experience.
        </p>
        <p>
          My goal was to develop a clear <strong>product vision</strong> focused
          on curiosity and accessibility: help visitors connect more deeply
          with marine exhibits without overwhelming them with text or pulling
          attention away from the live animals. <strong>Sea Here</strong> is
          built to enhance learning, not replace it, encouraging discovery
          through a lightweight, visual, and mobile-first interface.
        </p>
      </section>

      <section className="stakeholders">
        <h2>Understanding Stakeholder Needs</h2>
        <p>
          Through quick visitor observations and conversations, I identified
          three main audiences:
        </p>
        <ul>
          <li>
            <strong>Families:</strong> wanted short, interactive learning
            moments that keep kids engaged during visits.
          </li>
          <li>
            <strong>Educators:</strong> needed a flexible, offline-friendly tool
            that could extend classroom learning into the field.
          </li>
          <li>
            <strong>Kids:</strong> were drawn to colorful, tappable creatures
            and simple rewards like unlocking new marine species.
          </li>
        </ul>
        <p>
          These insights shaped <strong>Sea Here</strong> into a digital
          experience that feels personal and tactile—more like collecting
          memories than using a traditional guidebook.
        </p>
      </section>

      <section className="mobile-first">
        <h2>Mobile-First Design</h2>
        <p>
          Because most visitors rely on their phones inside the aquarium,
          designing from a <strong>mobile-first perspective</strong> was
          essential. The interface emphasizes simple gestures, large hit
          targets, and intuitive feedback so users can explore without menus or
          distractions.
        </p>
        <p>
          The desktop version grew naturally from the same foundation, preserving
          clarity while expanding visual space. Responsive scaling ensures that
          <strong> Sea Here</strong> feels equally smooth on a phone in your
          hand or a laptop at home.
        </p>

        {/* Desktop layout – full width */}
        <ImageList
          variant="quilted"
          sx={{
            width: "100%",
            maxWidth: 900,
            height: "auto",
            margin: "2rem auto 1rem auto",
          }}
          cols={4}
          rowHeight={220}
        >
          <ImageListItem cols={4} rows={2} sx={{ borderRadius: "12px", overflow: "hidden" }}>
            <img
              src={desktopShot}
              alt="Desktop Layout"
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </ImageListItem>
        </ImageList>

      <p className="image-title">Desktop Layout</p>

    {/* Three-wide grid for Mobile, Shark, and Octopus */}
    <ImageList
      sx={{
        width: "auto",
        maxWidth: 1500,
        height: "auto",
        margin: "1rem auto 2rem auto",
      }}
      cols={3}
      rowHeight={900}  
    >
      {[
        { img: mobileShot, title: "Mobile Layout" },
        { img: leopardShark, title: "Leopard Shark Page" },
        { img: giantOctopus, title: "Giant Pacific Octopus Page" },
      ].map((item, index) => (
        <ImageListItem key={index}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{
              borderRadius: "12px",
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
          <p className="image-title">{item.title}</p>
        </ImageListItem>
      ))}
    </ImageList>

      <p className="caption">
        Mobile and desktop layouts alongside sample species cards for the Indo-Pacific
        Leopard Shark and Giant Pacific Octopus. Together, they highlight Sea Here’s
        focus on clarity, curiosity, and conservation storytelling.
      </p>

      <p className="caption">
        Early prototypes demonstrating the mobile-first layout and
        responsive desktop design.
      </p>

    </section>

    <section className="design-process">
        <h2>Design Process</h2>

        <div className="process-step">
          <h3>Concept & Ideation</h3>
          <p>
            I experimented with ideas like scavenger hunts and AR overlays but
            ultimately chose a pixel-art sprite and card system that feels charming and
            lightweight. Each species card includes a sprite, fun fact, and
            habitat tags to encourage bite-sized learning.
          </p>
        </div>

        <div className="process-step">
          <h3>Visual Direction</h3>
          <p>
            The design draws inspiration from nostalgic 16-bit games and PNW
            ocean tones. Rounded UI elements, soft shadows, and a color palette
            of blues, teals, and corals make the interface calm yet playful.
          </p>
        </div>

        <div className="process-step">
          <h3>Prototype & Reflection</h3>
          <p>
            Built with <strong>React + Vite</strong> for fast load times and
            offline reliability. Early testers described the experience as
            “personal” and “museum-like.” Future plans include mini quizzes,
            local conservation badges, and a map-based scavenger mode.
          </p>
        </div>
      </section>

      <footer className="project-header">
          <Link to="/projects" className="back-link bottom">← Back to Projects</Link>
      </footer>
    </div>
  );
}
