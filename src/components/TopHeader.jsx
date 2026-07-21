import "./TopHeader.css";

function TopHeader() {
  return (
    <header className="top-header">
      <div className="website-name">
        <h2>Travel Buddy</h2>
      </div>

      <nav className="user-menu">
        <a href="#">My Profile</a>
        <a href="#">Change Password</a>
        <a href="#">My Tour History</a>
        <a href="#">Issued Ticket</a>
      </nav>

      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
          alt="Travel Buddy Logo"
        />
      </div>
    </header>
  );
}

export default TopHeader;