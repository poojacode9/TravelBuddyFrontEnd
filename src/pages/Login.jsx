import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, getCurrentUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

function Login() {

const navigate = useNavigate();

const { login } = useAuth();

const [showPassword, setShowPassword] = useState(false);

const [loginData, setLoginData] = useState({
  email: "",
  password: ""
});

const handleChange = (e) => {
  setLoginData({
    ...loginData,
    [e.target.name]: e.target.value,
  });
};


const handleLogin = async (e) => {

  e.preventDefault();

  try {

    // Login API
    const loginResponse = await loginUser(loginData);

    const token = loginResponse.data.token;

    // Get logged-in user details
    const userResponse = await getCurrentUser(token);

    // Save in AuthContext
    login({
      token: token,
      id: userResponse.data.id,
      name: userResponse.data.name,
      email: userResponse.data.email,
      phone: userResponse.data.phone,
      role: userResponse.data.role,
    });

    

    if (userResponse.data.role === "GUIDE") {

  navigate("/guide-dashboard");

} else if (userResponse.data.role === "ADMIN") {

  navigate("/admin-dashboard");

} else {

  navigate("/");

}
  } catch (error) {

    alert(
      error.response?.data?.message ||
      "Invalid email or password"
    );

  }

};
  

  return (
    <div className="login-container">
      <div className="login-card">

        <h1>Travel Buddy</h1>
        <h2>Welcome Back!</h2>

        <form onSubmit={handleLogin}>

          <div className="input-group">
            <label>Email</label>
            <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={handleChange}
            required
          />

            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>

          </div>

          <div className="login-options">

            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#">Forgot Password?</a>

          </div>

          <button className="login-btn">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;