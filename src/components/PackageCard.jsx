import "./PackageCard.css";

function PackageCard({ image, title, location, duration, price, rating }) {
  return (
    <div className="package-card">
      <img src={image} alt={title} />

      <div className="package-content">
        <h3>{title}</h3>

        <p>📍 {location}</p>

        <p>🗓 {duration}</p>

        <p className="rating">⭐ {rating}</p>

        <h2>₹ {price}</h2>

        <button>Book Now</button>
      </div>
    </div>
  );
}

export default PackageCard;