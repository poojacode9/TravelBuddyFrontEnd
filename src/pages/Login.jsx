import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();


  const [role, setRole] = useState("customer");


  const [loginData, setLoginData] = useState({

    email:"",
    password:""

  });



  const handleChange = (e)=>{

    setLoginData({

      ...loginData,
      [e.target.name]:e.target.value

    });

  };



  const handleLogin=(e)=>{

    e.preventDefault();


    console.log("Role:",role);
    console.log(loginData);



    if(role==="customer"){

      alert("Customer Login Successful");

      navigate("/");

    }


    else if(role==="admin"){

      alert("Admin Login Successful");

      // Admin page route later

    }


    else if(role==="tourguide"){

      alert("Tour Guide Login Successful");

      // Tour guide page route later

    }


  };




return(

<div className="login-container">


<div className="login-box">


<h2>Login</h2>



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




<input

type="password"

name="password"

placeholder="Enter Password"

value={loginData.password}

onChange={handleChange}

required

/>




<button className="login-btn">

Login

</button>




<Link to="/register">

<button type="button" className="register-btn">

Register

</button>

</Link>



</form>



</div>


</div>

)

}


export default Login;