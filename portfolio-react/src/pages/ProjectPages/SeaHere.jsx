import { Link } from "react-router-dom";
import "./ProjectPage.css"; // optional if you want consistent styling

export default function SeaHere() {
  return (
    <div className="project-page">
      <header className="project-header">
        <Link to="/" className="back-link">← Back to Projects</Link>
        <h1>Sea Here</h1>
        <p className="subtitle">
          An interactive aquarium companion web app that inspires curiosity for
          Pacific Northwest marine life.
        </p>
      </header>

      <section className="project-summary">
        <p>
          Growing up, I loved shows like <em>The Wild Kratts</em> and
          <em> Steve Irwin’s The Crocodile Hunter</em>. They made learning about
          wildlife feel like an adventure. I wanted to recreate that same spark
          for today’s kids, starting close to home. The Seattle Aquarium does an
          incredible job connecting people to Pacific Northwest marine life, so
          I designed <strong>Sea Here</strong>, a playful web app that turns real
          aquarium visits into an interactive learning experience.
        </p>
        <p>
          Sea Here helps visitors—especially families and students—discover more
          about each exhibit through pixel-art species cards, fun facts, and
          offline-first features that work without distracting from the animals
          in front of them. The goal: make marine education accessible,
          memorable, and fun while inspiring a generation that cares about ocean
          conservation.
        </p>
      </section>

      <section className="design-process">
        <h2>Design Process</h2>

        <div className="process-step">
          <h3>Problem Framing</h3>
          <p>
            Visitors, especially kids, often move quickly through exhibits and
            forget details afterward. Aquarium signage can be overwhelming or
            static. I aimed to design a digital companion that enhances learning
            without pulling attention away from the live experience.
          </p>
        </div>

        <div className="process-step">
          <h3>Research & Inspiration</h3>
          <p>
            I observed visitor behavior and reviewed apps like <em>Pokémon Go</em>,
            <em> Seek by iNaturalist</em>, and <em>National Geographic Kids</em>.
            Quick interviews with aquarium-goers emphasized a need for a visual,
            offline-friendly, and lightweight tool that feels more like
            collecting memories than reading a guidebook.
          </p>
        </div>

        <div className="process-step">
          <h3>Concept & Ideation</h3>
          <p>
            After exploring scavenger hunts and AR overlays, I chose a
            card-based pixel art system — simple, charming, and tactile. Each
            species card includes a custom sprite, fun fact, and tag icons for
            habitat, diet, and conservation status.
          </p>
        </div>

        <div className="process-step">
          <h3>Visual Design</h3>
          <p>
            The art direction draws from nostalgic 16-bit games. Blues, teals,
            and coral tones echo the PNW coast. I created pixel sprites in Figma
            and Aseprite for sea otters, giant Pacific octopus, and wolf eels.
            Rounded UI elements and offline caching reinforce a friendly,
            “digital field guide” feel.
          </p>
        </div>

        <div className="process-step">
          <h3>Prototype & Reflection</h3>
          <p>
            Built with <strong>React + Vite</strong> for fast load times and
            offline functionality. Early testers described it as “personal” and
            “museum-like.” Next steps include interactive quizzes, map-based
            scavenger hunts, and local conservation challenges.
          </p>
        </div>
      </section>

      <footer className="project-footer">
        <Link to="/" className="back-link bottom">← Back to Projects</Link>
      </footer>
    </div>
  );
}
