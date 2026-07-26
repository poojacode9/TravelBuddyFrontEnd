import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Booking.css";

function Booking() {

  const { user } = useAuth();

  const { state } = useLocation();

  const packageDetails = state;
    if (!packageDetails) {
    return (
        <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Package not found.</h2>
        <p>Please go back and select a package.</p>
        </div>
    );
    }

  const [travelDate, setTravelDate] = useState("");

  const [persons, setPersons] = useState(1);

  const packagePrice = Number(
  packageDetails.price.replace(/,/g, "")
);

  const packageName = packageDetails.title;

  const destination = packageDetails.location;

  const duration = packageDetails.duration;

  const totalAmount = packagePrice * persons;

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Booking page is ready. Backend connection will be done next.");

  };

  return (

    <div className="booking-page">

      <h1>Book Your Tour</h1>

      <div className="booking-container">

        {/* Package Details */}

        <div className="package-summary">

          <h2>Package Details</h2>
                    <img
            src={packageDetails.image}
            alt={packageName}
            style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "20px"
            }}
            />

          <p><strong>Package :</strong> {packageName}</p>

          <p><strong>Destination :</strong> {destination}</p>

          <p><strong>Duration :</strong> {duration}</p>

          <p><strong>Price :</strong> ₹ {packagePrice} / Person</p>

        </div>



        {/* Booking Form */}

        <form
          className="booking-form"
          onSubmit={handleSubmit}
        >

          <h2>Booking Details</h2>

          <label>Customer Name</label>

          <input
            type="text"
            value={user?.name || ""}
            readOnly
          />

          <label>Email</label>

          <input
            type="email"
            value={user?.email || ""}
            readOnly
          />

          <label>Travel Date</label>

          <input
            type="date"
            value={travelDate}
            onChange={(e) =>
              setTravelDate(e.target.value)
            }
            required
          />

          <label>Number of Persons</label>

          <input
            type="number"
            min="1"
            value={persons}
            onChange={(e) =>
              setPersons(e.target.value)
            }
          />

          <div className="total">

            <h3>
              Total Amount : ₹ {totalAmount}
            </h3>

          </div>

          <button type="submit">
            Confirm Booking
          </button>

        </form>

      </div>

    </div>

  );

}

export default Booking;