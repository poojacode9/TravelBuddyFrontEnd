import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/about">
        About
      </NavLink>

      <NavLink to="/packages">
        Tour Packages
      </NavLink>

      <NavLink to="/privacypolicy">
        Privacy Policy
      </NavLink>

      <NavLink to="/contact">
        Contact Us
      </NavLink>

      <NavLink to="/needhelp">
        Need Help
      </NavLink>

    </nav>
  );
}

export default Navbar;