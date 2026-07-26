import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";


function Login() {

  const navigate = useNavigate();


  const [showPassword, setShowPassword] = useState(false);


  const [role, setRole] = useState("customer");


  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });



  const handleChange = (e) => {

    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });

  };



  const handleLogin = (e) => {

    e.preventDefault();


    console.log("Role:", role);
    console.log(loginData);



    if(role === "customer") {

      alert("Customer Login Successful");
      navigate("/");

    }

    else if(role === "admin") {

      alert("Admin Login Successful");

    }

    else if(role === "tourguide") {

      alert("Tour Guide Login Successful");

    }

  };



  return (

    <div className="login-container">

      <div className="login-box">


        <h1>Travel Buddy</h1>

        <h2>Welcome Back!</h2>



        <form onSubmit={handleLogin}>


          <label>Select Role</label>

          <select
            value={role}
            onChange={(e)=>setRole(e.target.value)}
          >

            <option value="customer">
              Customer
            </option>


            <option value="admin">
              Admin
            </option>


            <option value="tourguide">
              Tour Guide
            </option>


          </select>



          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
            onChange={handleChange}
            required
          />



          <div className="password-box">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
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
              <input type="checkbox"/>
              Remember Me
            </label>


            <a href="#">
              Forgot Password?
            </a>


          </div>



          <button className="login-btn">
            Login
          </button>



          <Link to="/register">

            <button 
              type="button" 
              className="register-btn"
            >
              Register
            </button>

          </Link>


        </form>


      </div>

    </div>

  );

}


export default Login;