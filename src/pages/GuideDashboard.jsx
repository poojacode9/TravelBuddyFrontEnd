import { Link } from "react-router-dom";
import "./GuideDashboard.css";

function GuideDashboard() {
  return (
    <div className="guide-dashboard">

      <h1>Welcome, Guide 👋</h1>
      <p>Manage your tour packages and bookings.</p>

      <div className="dashboard-cards">

        <Link to="/guide/add-package" className="dashboard-card">
          <h2>➕</h2>
          <h3>Add Tour Package</h3>
          <p>Create a new tour package.</p>
        </Link>

        <Link to="/guide/my-packages" className="dashboard-card">
          <h2>📦</h2>
          <h3>My Packages</h3>
          <p>View and manage your packages.</p>
        </Link>

        <Link to="/guide/bookings" className="dashboard-card">
          <h2>📖</h2>
          <h3>Bookings</h3>
          <p>View customer bookings.</p>
        </Link>

        <Link to="/profile" className="dashboard-card">
          <h2>👤</h2>
          <h3>My Profile</h3>
          <p>Update your profile.</p>
        </Link>

      </div>

    </div>
  );
}

export default GuideDashboard;