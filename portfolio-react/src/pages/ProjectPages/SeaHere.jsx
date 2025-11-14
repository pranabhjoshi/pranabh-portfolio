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
      <div className="top">
        <h1>Sea Here</h1>
        <img
          src={desktopShot}
          alt="Desktop Layout"
          className="top-mockup-img"
        />
        <h3>A Seattle Aquarium Product</h3>
      </div>


      

      {/* Combined Overview Section: Intro + Stakeholders + Mobile-First */}
      <section className="overview">
        <h2>Overview</h2>
        <p>
          Growing up, I loved shows like <em>The Wild Kratts</em> and
          <em> Steve Irwin’s The Crocodile Hunter</em>. They made learning about
          wildlife feel like an adventure. I wanted to recreate that same spark
          for today’s kids, starting close to home. The Seattle Aquarium does an
          incredible job connecting people to Pacific Northwest marine life, so
          I designed <strong>Sea Here</strong>, a playful companion app that turns
          real aquarium visits into an interactive learning experience.
        </p>
        <p>
          My goal was a clear <strong>product vision</strong> focused on curiosity and
          accessibility: help visitors connect more deeply with marine exhibits without
          overwhelming them. <strong>Sea Here</strong> enhances learning with a lightweight,
          visual, mobile-first interface.
        </p>
        <h2>Stakeholders</h2>
        <ul>
          <li><strong>Families</strong> wanted short, interactive moments to keep kids engaged.</li>
          <li><strong>Kids</strong> loved colorful, tappable creatures and simple rewards.</li>
          <li><strong>The Aquarium</strong> needed an experience that was fast, quiet, and low-screen so it wouldn’t distract from the live animals or disrupt exhibit flow.</li>
        </ul>
        <h2>Mobile-First</h2>
        <p>
          Designed primarily for phones used inside the aquarium: simple gestures, large hit
          targets, and intuitive feedback. The desktop version scales from the same foundation
          to preserve clarity while expanding visual space.
        </p>
      </section>

      {/* Designs Section: smaller, spaced-out media */}
      <section className="designs">
        <h2>Responsive Mobile Designs</h2>
       

        <ImageList
          sx={{ width: "100%", maxWidth: "100%", height: "auto", margin: "0" }}
          cols={3}
        >
          {[
            { img: mobileShot, title: "Mobile Layout" },
            { img: giantOctopus, title: "After tapping the Giant Pacific Octupus" },
            { img: leopardShark, title: "After tapping 'learn more' on the Leopard Shark" },
          ].map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: "12px", width: "100%", height: "auto", objectFit: "cover" }}
              />
              <p className="image-title">{item.title}</p>
            </ImageListItem>
          ))}
        </ImageList>

        <p className="caption">
          Mobile and desktop layouts plus sample species pages demonstrating clarity, curiosity,
          and conservation storytelling.
        </p>
      </section>

    </div>
  );
}
