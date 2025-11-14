import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <div className="nav-left">
          <NavLink to="/" className="nav-name">pranabhjoshi.com</NavLink>
        </div>

        <div className="nav-right">
          {/* <NavLink to="/skills" className="nav-link">Skills</NavLink> */}
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/writing" className="nav-link">Writing</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="contact-btn">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}


export default Header; 