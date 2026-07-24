import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/packages">Tour Packages</Link></li>

        <li><Link to="/privacypolicy">Privacy Policy</Link></li>

        <li><Link to="/contact">Contact Us</Link></li>

        <li><Link to="/needhelp">Need Help</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;