import "./Contact.css";

function Contact() {

  return (
    <div className="contact-page">


      {/* Hero Section */}

      <section className="contact-hero">

        <h1>
          Contact Us
        </h1>

        <p>
          We are here to help you plan your perfect journey.
        </p>

      </section>




      {/* Contact Information */}

      <section className="contact-container">


        <div className="contact-info">


          <h2>
            Get In Touch
          </h2>


          <p>
            Have questions about our tour packages or bookings?
            Feel free to contact our Travel Buddy support team.
          </p>



          <div className="info-item">

            <h3>
              📍 Address
            </h3>

            <p>
              Pune, Maharashtra, India
            </p>

          </div>



          <div className="info-item">

            <h3>
              📞 Phone
            </h3>

            <p>
              +91 98765 43210
            </p>

          </div>



          <div className="info-item">

            <h3>
              ✉ Email
            </h3>

            <p>
              support@travelbuddy.com
            </p>

          </div>



        </div>





        {/* Contact Form */}

        <div className="contact-form">


          <h2>
            Send Us A Message
          </h2>


          <form>


            <input
              type="text"
              placeholder="Your Name"
            />


            <input
              type="email"
              placeholder="Your Email"
            />


            <input
              type="text"
              placeholder="Subject"
            />


            <textarea
              placeholder="Your Message"
              rows="5"
            ></textarea>



            <button>
              Send Message
            </button>


          </form>


        </div>


      </section>




      {/* Support Section */}

      <section className="support-section">


        <h2>
          Need Travel Assistance?
        </h2>


        <p>
          Our team is available to help you with bookings,
          packages, payments, and travel queries.
        </p>


      </section>



    </div>
  );

}


export default Contact;