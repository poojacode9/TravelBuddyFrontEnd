import "./PackageCard.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PackageCard({ id, image, title, location, duration, price, rating }) {

  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBookNow = () => {

  if (!user) {
    navigate("/login");
  } else {
    navigate(`/booking/${id}`, {
      state: {
        image,
        title,
        location,
        duration,
        price,
        rating
      }
    });
  }

};
  return (
    <div className="package-card">
      <img src={image} alt={title} />

      <div className="package-content">
        <h3>{title}</h3>

        <p>📍 {location}</p>

        <p>🗓 {duration}</p>

        <p className="rating">⭐ {rating}</p>

        <h2>₹ {price}</h2>

        <button onClick={handleBookNow}>
               Book Now
        </button>
      </div>
    </div>
  );
}

export default PackageCard;