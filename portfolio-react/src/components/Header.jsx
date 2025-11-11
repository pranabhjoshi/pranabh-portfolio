import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
      <h3 className="city">SEATTLE, WA</h3>
      <h1 className="name">PRANABH JOSHI</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/writing">Writing</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
    )
}

export default Header; 