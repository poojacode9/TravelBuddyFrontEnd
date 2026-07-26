import "./TopHeader.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

function TopHeader() {

  const { user, logout } = useAuth();

  return (
    <header className="top-header">

      <div className="website-name">
        <h2>Travel Buddy</h2>
      </div>


      <div className="right-section">

        <nav className="user-menu">

          {!user ? (
            <>
              <Link className="auth-btn login" to="/login">
                Login
              </Link>

              <Link className="auth-btn register" to="/register">
                Register
              </Link>
            </>
          ) : (

            <div className="user-dropdown">

              <button className="user-btn">
                <FaUserCircle size={22}/>
                <span>{user.name}</span>
              </button>

              <div className="dropdown-content">

                <Link to="/profile">My Profile</Link>
                <Link to="/change-password">Change Password</Link>
                <Link to="/tour-history">My Tour History</Link>
                <Link to="/ticket">Issued Ticket</Link>

                <button onClick={logout}>
                  Logout
                </button>

              </div>

            </div>

          )}

        </nav>


        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
            alt="Travel Buddy Logo"
          />
        </div>


      </div>


    </header>
  );
}

export default TopHeader;