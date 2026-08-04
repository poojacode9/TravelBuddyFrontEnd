import React, { useEffect, useState } from "react";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaUserTag,
} from "react-icons/fa";
import api from "../services/api";
import "./Profile.css";

function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await api.get("/users/me");
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      alert("Unable to load profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="profile-page">

      <div className="container">

        <div className="profile-card shadow-lg">

          <div className="profile-header">

            <FaUserCircle className="profile-icon" />

            <h2>My Profile</h2>

            <p>TravelBuddy User Information</p>

          </div>

          <div className="profile-body">

            <div className="profile-row">

              <div className="profile-label">
                <FaUserTag className="me-2 text-primary" />
                Name
              </div>

              <div className="profile-value">
                {user.name}
              </div>

            </div>

            <div className="profile-row">

              <div className="profile-label">
                <FaEnvelope className="me-2 text-danger" />
                Email
              </div>

              <div className="profile-value">
                {user.email}
              </div>

            </div>

            <div className="profile-row">

              <div className="profile-label">
                <FaPhone className="me-2 text-success" />
                Phone
              </div>

              <div className="profile-value">
                {user.phone || "Not Available"}
              </div>

            </div>

            <div className="profile-row">

              <div className="profile-label">
                <FaUserTag className="me-2 text-warning" />
                Role
              </div>

              <div className="profile-value">
                <span className="badge bg-primary fs-6">
                  {user.role}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;