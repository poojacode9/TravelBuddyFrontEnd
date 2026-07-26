import "./About.css";

function About() {

  return (
    <div className="about-page">

      <section className="about-banner">
        <h1>About Travel Buddy</h1>
        <p>
          Explore the world with comfort, safety and unforgettable memories.
        </p>
      </section>


      <section className="about-content">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Travel"
          />
        </div>


        <div className="about-text">

          <h2>Who We Are?</h2>

          <p>
            Travel Buddy is a complete travel platform that helps travelers
            discover amazing destinations, book exciting tour packages and
            enjoy hassle-free journeys.
          </p>

          <p>
            Our mission is to provide affordable travel experiences with
            trusted services, comfortable stays and memorable adventures.
          </p>


          <div className="about-cards">

            <div className="about-card">
              <h3>🌎 50+</h3>
              <p>Destinations</p>
            </div>


            <div className="about-card">
              <h3>✈️ 500+</h3>
              <p>Happy Travelers</p>
            </div>


            <div className="about-card">
              <h3>⭐ 4.8</h3>
              <p>Customer Rating</p>
            </div>


          </div>


        </div>


      </section>


    </div>
  );
}


export default About;