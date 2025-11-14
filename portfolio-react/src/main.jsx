import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";  // ← this line is crucial
import Skills from "./pages/Skills.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Writing from "./pages/Writing.jsx";
import Resume from "./pages/Resume.jsx";
import Layout from "./components/Layout.jsx";
import SeaHere from "./pages/ProjectPages/SeaHere.jsx";
import ActUp from "./pages/ProjectPages/ActUp.jsx";
import Ginger from "./pages/ProjectPages/Ginger.jsx";
import FutureForeignPolicy from "./pages/WritingPages/FutureForeignPolicy.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<Skills />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/sea-here" element={<SeaHere />} />
        <Route path="/actup" element={<ActUp />} />
        <Route path="/ginger" element={<Ginger />} />
        <Route path="/future-foreign-policy" element={<FutureForeignPolicy />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
