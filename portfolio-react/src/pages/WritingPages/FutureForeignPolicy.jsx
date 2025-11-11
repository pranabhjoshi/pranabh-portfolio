import { Link } from "react-router-dom";
import "./ProjectPage.css";

export default function FutureForeignPolicy() {
  return (
    <div className="project-page">
        <header className="project-header">
            <Link to="/" className="back-link">← Back to Projects</Link>
            <h1>The Future of American Foreign Policy</h1>
            <p className="subtitle">
            A contemporary analysis of how technological power, AI governance, and
            private influence are reshaping U.S. foreign policy traditions.
            </p>
        </header>

        <section className="project-summary">
            <p>
            This paper examines how American global power is shifting from
            military and economic dominance toward technological leadership. Once
            defined by <strong>FAANG</strong>—Facebook, Apple, Amazon, Netflix,
            and Google—the U.S. now navigates a <strong>MANGO</strong> era driven
            by Meta, Apple, Nvidia, Google, and OpenAI. The analysis argues that
            America’s ability to shape global norms increasingly depends on who
            controls the systems of information, intelligence, and innovation.
            </p>
            <p>
            The essay explores how public-private partnerships, AI governance, and
            global market competition shape the future of American diplomacy.
            Drawing from Hamiltonian economic statecraft and Wilsonian
            multilateralism, it proposes a balanced approach that leverages
            innovation while protecting democratic accountability.
            </p>
        </section>

        <section className="design-process">
            <h2>Key Themes</h2>

            <div className="process-step">
            <h3>1. Technological Power as Foreign Policy</h3>
            <p>
                The transition from FAANG to MANGO symbolizes a deeper shift in
                global influence—one where algorithms and chipsets matter as much as
                armies. The paper traces how the internet, originally a DARPA
                project, evolved into a global system reflecting American values and
                control structures.
            </p>
            </div>

            <div className="process-step">
            <h3>2. Corporate-State Fusion</h3>
            <p>
                As private firms like OpenAI, Meta, and Nvidia shape defense and
                cyber strategy, the line between corporate power and government
                policy blurs. This trend, visible in congressional strategies and
                public-private defense partnerships, risks weakening democratic
                oversight while expanding global reach.
            </p>
            </div>

            <div className="process-step">
            <h3>3. Balancing Leadership and Accountability</h3>
            <p>
                The challenge lies in maintaining technological leadership without
                allowing unelected corporate leaders to dictate national priorities.
                The essay highlights real-world tensions—from Elon Musk’s influence
                in Ukraine to Meta’s news ban in Canada—as examples of private power
                overtaking public good.
            </p>
            </div>

            <div className="process-step">
            <h3>4. Historical Frameworks for the AI Era</h3>
            <p>
                Drawing from Walter Russell Mead’s traditions, the analysis links
                modern AI governance to <strong>Hamiltonian</strong> and{" "}
                <strong>Wilsonian</strong> foreign policy models—emphasizing
                innovation, diplomacy, and restraint. It warns against{" "}
                <strong>Jacksonian militarism</strong> and ideological overreach in
                managing digital power, echoing lessons from the Cold War and the
                Iraq War.
            </p>
            </div>

            <div className="process-step">
            <h3>5. Policy Proposal: Allied AI & Semiconductor Framework</h3>
            <p>
                The paper concludes with a call for an{" "}
                <em>Allied Semiconductor and AI Framework</em> under OECD
                leadership—a multilateral initiative to coordinate access, enforce
                standards, and promote democracy in AI and data governance without
                military escalation.
            </p>
            </div>
        </section>

        <section className="mockups">
            <h2>Outcome</h2>
            <p>
            This project bridges technology, policy, and international relations,
            arguing that the United States must adapt its leadership model to the
            information age. By combining domestic innovation with cooperative
            diplomacy, America can preserve both its global influence and its
            democratic identity.
            </p>
        </section>

      <section className="paper-preview">
            <h2>Read the Full Paper</h2>
            <iframe
                src="/papers/FutureForeignPolicy.pdf"
                width="100%"
                height="800px"
                title="Future of American Foreign Policy"
                style={{ borderRadius: "1rem", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
            ></iframe>
            <p className="download-note">
                Prefer a full view? <a href="/papers/FutureForeignPolicy.pdf" target="_blank" rel="noopener noreferrer">Open in new tab</a>
            </p>
        </section>


      <footer className="project-footer">
        <Link to="/" className="back-link bottom">← Back to Projects</Link>
      </footer>
    </div>
  );
}
