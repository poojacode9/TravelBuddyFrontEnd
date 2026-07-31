import "./PackageCard.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PackageCard({ id, image, title, location, duration, price, rating }) {

  const navigate = useNavigate();
  const { user } = useAuth();

  const handleBookNow = () => {
console.log("Package id =", id);
  if (!user) {
    navigate("/login");
  } else {
    console.log("Package id =", id);
    navigate(`/booking/${id}`, {
 state: {
    id,
    packageName: title,
    destination: location,
    duration,
    price,
    imageUrl: image
  }
});
  }

};
  return (
    <div className="package-card">
      <img
  src={`http://localhost:8080/images/${image}`}
  alt={title}
/>

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