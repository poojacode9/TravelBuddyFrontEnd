import React, { useState } from "react";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaKey,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "./ChangePassword.css";

function ChangePassword() {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (newPassword.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New Password and Confirm Password do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/users/change-password", {
        currentPassword,
        newPassword,
      });

      alert(response.data || "Password Changed Successfully.");

      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");

      navigate("/profile");
    } catch (error) {
      alert(
        error.response?.data ||
          "Unable to change password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="change-password-page">

      <div className="container">

        <div className="change-password-card shadow-lg">

          <div className="change-password-header">

            <FaKey className="change-password-icon" />

            <h2>Change Password</h2>

            <p>Keep your TravelBuddy account secure</p>

          </div>

          <form
            className="change-password-body"
            onSubmit={handleSubmit}
          >

            {/* Current Password */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Current Password
              </label>

              <div className="password-box">

                <FaLock className="password-icon" />

                <input
                  type={showCurrent ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter Current Password"
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(e.target.value)
                  }
                />

                <span
                  className="eye-icon"
                  onClick={() =>
                    setShowCurrent(!showCurrent)
                  }
                >
                  {showCurrent ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>

              </div>

            </div>

            {/* New Password */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                New Password
              </label>

              <div className="password-box">

                <FaLock className="password-icon" />

                <input
                  type={showNew ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(e.target.value)
                  }
                />

                <span
                  className="eye-icon"
                  onClick={() =>
                    setShowNew(!showNew)
                  }
                >
                  {showNew ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>

              </div>

            </div>

            {/* Confirm Password */}

            <div className="mb-4">

              <label className="form-label fw-bold">
                Confirm Password
              </label>

              <div className="password-box">

                <FaLock className="password-icon" />

                <input
                  type={showConfirm ? "text" : "password"}
                  className="form-control"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />

                <span
                  className="eye-icon"
                  onClick={() =>
                    setShowConfirm(!showConfirm)
                  }
                >
                  {showConfirm ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </span>

              </div>

            </div>
<button type="submit" className="glass-btn" disabled={loading}>
  {loading ? "Updating..." : "Change Password"}
</button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default ChangePassword;