import React, { useState } from "react";
import "./NeedHelp.css";

function NeedHelp() {

  const [helpData, setHelpData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  const handleChange = (e) => {

    setHelpData({
      ...helpData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(helpData);

    alert("Your request has been submitted. We will contact you soon!");

  };


  return (

    <div className="help-container">


      <div className="help-box">


        <h1>Need Help?</h1>

        <p>
          Have questions or facing any issues?
          Our support team is here to help you.
        </p>


        <form onSubmit={handleSubmit}>


          <input

            type="text"

            name="name"

            placeholder="Enter Your Name"

            value={helpData.name}

            onChange={handleChange}

            required

          />



          <input

            type="email"

            name="email"

            placeholder="Enter Your Email"

            value={helpData.email}

            onChange={handleChange}

            required

          />



          <input

            type="text"

            name="subject"

            placeholder="Enter Subject"

            value={helpData.subject}

            onChange={handleChange}

            required

          />



          <textarea

            name="message"

            placeholder="Write your message"

            value={helpData.message}

            onChange={handleChange}

            required

          ></textarea>



          <button type="submit">

            Submit Request

          </button>


        </form>


      </div>


    </div>

  );

}


export default NeedHelp;