import "./About.css";

function About() {

  return (
    <div className="about-page">


      {/* Hero Section */}
      <section className="about-hero">

        <h1>
          About Travel Buddy
        </h1>

        <p>
          Explore the world with confidence. 
          Travel Buddy makes your journey comfortable,
          memorable, and hassle-free.
        </p>

      </section>



      {/* Introduction */}
      <section className="about-intro">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800"
            alt="Travel"
          />

        </div>



        <div className="about-content">

          <h2>
            Who We Are
          </h2>

          <p>
            Travel Buddy is a modern tour and travel platform
            designed to help travelers discover amazing destinations,
            book exciting packages, and enjoy a smooth travel experience.
          </p>

          <p>
            From beautiful beaches to adventurous mountains,
            we provide carefully planned tours with trusted services,
            comfortable stays, and memorable experiences.
          </p>

        </div>

      </section>




      {/* Mission Vision */}

      <section className="mission-section">


        <div className="mission-card">

          <h2>
            Our Mission
          </h2>

          <p>
            To make travel simple, affordable, and accessible
            for everyone by providing quality tour experiences.
          </p>

        </div>



        <div className="mission-card">

          <h2>
            Our Vision
          </h2>

          <p>
            To become a trusted travel companion that connects
            people with unforgettable destinations worldwide.
          </p>

        </div>


      </section>




      {/* Why Choose Us */}

      <section className="why-about">

        <h2>
          Why Choose Travel Buddy?
        </h2>


        <div className="features">


          <div className="feature-card">

            <h3>
              🌍 Amazing Destinations
            </h3>

            <p>
              Explore handpicked destinations across India and beyond.
            </p>

          </div>



          <div className="feature-card">

            <h3>
              🏨 Quality Services
            </h3>

            <p>
              Comfortable hotels, transport and guided tours.
            </p>

          </div>



          <div className="feature-card">

            <h3>
              💰 Affordable Packages
            </h3>

            <p>
              Enjoy great travel experiences at reasonable prices.
            </p>

          </div>


        </div>

      </section>




      {/* Stats */}

      <section className="stats">


        <div>
          <h2>500+</h2>
          <p>Happy Travelers</p>
        </div>


        <div>
          <h2>100+</h2>
          <p>Tour Packages</p>
        </div>


        <div>
          <h2>50+</h2>
          <p>Destinations</p>
        </div>


      </section>



    </div>
  );
}


export default About;