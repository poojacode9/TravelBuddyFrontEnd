import "./PrivacyPolicy.css";

function PrivacyPolicy() {

  return (
    <div className="privacy-page">


      {/* Header */}
      <section className="privacy-hero">

        <h1>
          Privacy Policy
        </h1>

        <p>
          Your privacy and trust are important to us.
        </p>

      </section>



      {/* Content */}

      <section className="privacy-content">


        <div className="privacy-card">

          <h2>
            Introduction
          </h2>

          <p>
            Welcome to Travel Buddy. This Privacy Policy explains
            how we collect, use, and protect your personal information
            when you use our travel services and website.
          </p>

        </div>



        <div className="privacy-card">

          <h2>
            Information We Collect
          </h2>

          <p>
            We may collect information such as your name, email address,
            phone number, booking details, and payment information when
            you register, book tours, or contact us.
          </p>

        </div>



        <div className="privacy-card">

          <h2>
            How We Use Your Information
          </h2>

          <ul>

            <li>
              To provide and manage tour booking services.
            </li>

            <li>
              To process payments and confirm reservations.
            </li>

            <li>
              To improve our website and user experience.
            </li>

            <li>
              To send important updates regarding your bookings.
            </li>

          </ul>

        </div>




        <div className="privacy-card">

          <h2>
            Data Security
          </h2>

          <p>
            We take appropriate security measures to protect your
            personal information from unauthorized access, misuse,
            or disclosure.
          </p>

        </div>




        <div className="privacy-card">

          <h2>
            Third Party Services
          </h2>

          <p>
            We may use trusted third-party services such as payment
            gateways and hosting providers to provide better services.
            These services follow their own privacy policies.
          </p>

        </div>




        <div className="privacy-card">

          <h2>
            Your Rights
          </h2>

          <p>
            You have the right to access, update, or request deletion
            of your personal information. You can contact us for any
            privacy-related concerns.
          </p>

        </div>



      </section>



      {/* Contact */}

      <section className="privacy-contact">

        <h2>
          Have Questions?
        </h2>

        <p>
          Contact Travel Buddy support for any privacy concerns.
        </p>

      </section>


    </div>
  );
}


export default PrivacyPolicy;