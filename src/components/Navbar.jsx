import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

  const { user } = useAuth();

  return (
    <nav className="navbar">

      {user?.role === "GUIDE" || user?.role === "ADMIN" ? (

          <NavLink to={
            user.role === "GUIDE"
              ? "/guide-dashboard"
              : "/admin-dashboard"
          } className="nav-link">
            Dashboard
          </NavLink>

        ) : (
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>

      )}


      <NavLink to="/about" className="nav-link">
        About
      </NavLink>


      <NavLink to="/packages" className="nav-link">
        Tour Packages
      </NavLink>


      <NavLink to="/contact" className="nav-link">
        Contact Us
      </NavLink>


    </nav>
  );
}

export default Navbar;