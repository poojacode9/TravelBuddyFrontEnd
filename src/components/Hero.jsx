import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Explore the World with Travel Buddy</h1>
          <p>
            Discover amazing destinations, book unforgettable tours,
            and create memories that last a lifetime.
          </p>

          <button className="hero-btn">
            Explore Packages
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;