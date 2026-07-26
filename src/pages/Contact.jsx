import React, { useState } from "react";
import "./Contact.css";

function ContactUs() {


  const [contactData, setContactData] = useState({

    name:"",
    email:"",
    phone:"",
    message:""

  });



  const handleChange = (e)=>{

    setContactData({

      ...contactData,
      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = (e)=>{

    e.preventDefault();

    console.log(contactData);

    alert("Thank you for contacting TravelBuddy. We will get back to you soon!");

  };



  return (

    <div className="contact-container">


      <div className="contact-box">


        <h1>Contact Us</h1>


        <p className="contact-text">

          Have any questions about our tours or services?
          Feel free to contact us. Our team is always ready to help you.

        </p>



        <div className="contact-info">


          <h3>TravelBuddy Support</h3>

          <p>📍 Pune, Maharashtra, India</p>

          <p>📞 +91 9876543210</p>

          <p>✉ support@travelbuddy.com</p>


        </div>




        <form onSubmit={handleSubmit}>


          <input

            type="text"

            name="name"

            placeholder="Enter Your Name"

            value={contactData.name}

            onChange={handleChange}

            required

          />



          <input

            type="email"

            name="email"

            placeholder="Enter Your Email"

            value={contactData.email}

            onChange={handleChange}

            required

          />



          <input

            type="text"

            name="phone"

            placeholder="Enter Phone Number"

            value={contactData.phone}

            onChange={handleChange}

            required

          />



          <textarea

            name="message"

            placeholder="Write Your Message"

            value={contactData.message}

            onChange={handleChange}

            required

          ></textarea>




          <button type="submit">

            Send Message

          </button>


        </form>


      </div>


    </div>

  );

}


export default ContactUs;