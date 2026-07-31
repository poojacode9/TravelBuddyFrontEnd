import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Booking.css";
import axios from "axios";

function Booking() {

  const { user } = useAuth();

  const { state } = useLocation();

  const packageDetails = state;
  console.log("Package Details:", packageDetails);
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

  const packagePrice = packageDetails.price;

  const packageName = packageDetails.packageName;

  const destination = packageDetails.destination;

  const duration = packageDetails.duration;

  const totalAmount = packagePrice * persons;


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const bookingData = {
      bookingDate: new Date().toISOString().split("T")[0],
      travelDate: travelDate,
      numberOfPersons: Number(persons),
      totalAmount: totalAmount,
      status: "PENDING",
      userId: user.id,
      packageId: packageDetails.id,
    };

    
    const token = localStorage.getItem("token");

const response = await axios.post(
  "http://localhost:8080/bookings",
  bookingData,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

const booking = response.data.booking;
const payment = response.data.payment;
console.log("Payment Response:", payment);
const options = {

  key: payment.key,

  amount: payment.amount * 100,

  currency: "INR",

  name: "TravelBuddy",

  description: "Tour Booking",

  order_id: payment.razorpayOrderId,

 handler: async function (response) {

    try {

        const verifyResponse = await axios.post(
            "http://localhost:8081/payments/verify",
            {
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature
            }
        );

        console.log(verifyResponse.data);

        alert("Payment Successful!");

    } catch (error) {

        console.log(error);

        alert("Payment Verification Failed!");

    }

}

};

const razorpay = new window.Razorpay(options);

razorpay.open();
  } catch (error) {

  

  alert("Booking failed!");

}
};

  return (

    <div className="booking-page">

      <h1>Book Your Tour</h1>

      <div className="booking-container">

        {/* Package Details */}

        <div className="package-summary">

          <h2>Package Details</h2>
                    <img
                          src={`http://localhost:8080/images/${packageDetails.imageUrl}`}
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