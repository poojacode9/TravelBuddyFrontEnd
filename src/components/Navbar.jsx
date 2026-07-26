import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
        <nav className="navbar">

            <NavLink to="/">Home</NavLink>

            <NavLink to="/packages">Tour Packages</NavLink>

            <NavLink to="/about">About</NavLink>

            <NavLink to="/privacy-policy">Privacy Policy</NavLink>

            <NavLink to="/contact">Contact</NavLink>

            <NavLink to="/need-help">Need Help</NavLink>

        </nav>
    );
}

export default Navbar;