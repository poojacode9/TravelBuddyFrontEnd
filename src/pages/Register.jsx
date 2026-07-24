import React, {useState} from "react";
import "./Register.css";
import {Link,useNavigate} from "react-router-dom";


function Register(){

    const navigate = useNavigate();


    const [user,setUser]=useState({

        name:"",
        email:"",
        password:"",
        confirmPassword:""

    });



    const handleChange=(e)=>{

        setUser({

            ...user,
            [e.target.name]:e.target.value

        });

    }



    const handleSubmit=(e)=>{

        e.preventDefault();


        if(user.password !== user.confirmPassword){

            alert("Password does not match");
            return;

        }


        console.log(user);

        alert("Registration Successful");

        navigate("/login");

    }



    return(

        <div className="register-container">


            <div className="register-box">


                <h2>Create Account</h2>


                <form onSubmit={handleSubmit}>


                <input

                type="text"
                name="name"
                placeholder="Enter Name"
                onChange={handleChange}
                required

                />


                <input

                type="email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
                required

                />



                <input

                type="password"
                name="password"
                placeholder="Enter Password"
                onChange={handleChange}
                required

                />



                <input

                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                required

                />


                <button>
                    Register
                </button>


                </form>


                <p>

                Already have account?

                <Link to="/login">
                    Login
                </Link>

                </p>



            </div>


        </div>


    )

}


export default Register;