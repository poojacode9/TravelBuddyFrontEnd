import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  role: "",
});


  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (user.password !== user.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  try {

    await axios.post("http://localhost:8080/users", {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: user.password,
      role: user.role,
    });

    alert("Registration Successful!");
    navigate("/login");

  } catch (error) {

    console.error(error);

    if (error.response) {

      console.log("Status:", error.response.status);
      console.log("Response:", error.response.data);

      alert(JSON.stringify(error.response.data));

    } else {

      alert("Unable to connect to the server.");

    }

  }
};

  return (
    <div className="register-container">
      <div className="register-card">

        <h1>Travel Buddy</h1>
        <h2>Create Your Account</h2>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

            <div className="input-group">
              <label>Mobile Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter mobile number"
                value={user.phone}
                onChange={handleChange}
                required
              />
            </div>

        <div className="input-group">
          <label>Role</label>

          <select
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="CUSTOMER">Customer</option>
            <option value="GUIDE">Guide</option>
          </select>
        </div>


          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={user.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
                  Register
          </button>

        </form>

        <p className="login-link">
          Already have an account?
          <a href="#"> Sign In</a>
        </p>

      </div>
    </div>
  );
}

export default Register;