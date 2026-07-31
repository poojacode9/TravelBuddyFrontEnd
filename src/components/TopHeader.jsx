import "./TopHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

function TopHeader() {

  const { user, logout } = useAuth();
  const navigate = useNavigate();


  const handleLogout = () => {

    logout();

    navigate("/");

  };
  return (

    <header className="top-header">

      <div className="website-name">
        <h2>Travel Buddy</h2>
      </div>

      <div className="right-section">

        {!user ? (

          <div className="auth-buttons">

            <Link to="/login" className="auth-btn login">
              Login
            </Link>

            <Link to="/register" className="auth-btn register">
              Register
            </Link>

          </div>

        ) : (

          <div className="user-dropdown">

            <button className="user-btn">

              <FaUserCircle size={24} />

              <span>
                Welcome, {user.name}
              </span>

            </button>

            <div className="dropdown-content">

              <Link to="/profile">
                My Profile
              </Link>

              <Link to="/change-password">
                Change Password
              </Link>

              <Link to="/tour-history">
                My Tour History
              </Link>

              <Link to="/ticket">
                Issued Ticket
              </Link>

              <button onClick={handleLogout}>
                        Logout
              </button>

            </div>

          </div>

        )}

        <div className="logo">
  <img
    src="https://cdn-icons-png.flaticon.com/512/2200/2200326.png"
    alt="Travel Buddy Logo"
  />
</div>

      </div>

    </header>

  );
}

export default TopHeader;