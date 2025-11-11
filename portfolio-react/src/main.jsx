import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import { createRoot } from "react-dom/client";  // ← this line is crucial
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Writing from "./pages/Writing.jsx";
import Resume from "./pages/Resume.jsx";
import Layout from "./components/Layout.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout> 
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
