import { useEffect, useState } from "react";
import axios from "axios";
import "./PendingPackages.css";

function PendingPackages() {

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPendingPackages();
  }, []);

  const fetchPendingPackages = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:8080/packages/pending",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setPackages(response.data);

    } catch (error) {

      console.log(error);
      alert("Unable to fetch pending packages");

    }

  };

  const approvePackage = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:8080/packages/${id}/approve`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Package Approved");

      fetchPendingPackages();

    } catch (error) {

      console.log(error);
      alert("Approval failed");

    }

  };

  const rejectPackage = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:8080/packages/${id}/reject`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Package Rejected");

      fetchPendingPackages();

    } catch (error) {

      console.log(error);
      alert("Reject failed");

    }

  };

  return (

    <div className="pending-container">

      <h1>Pending Tour Packages</h1>

      <div className="package-list">

        {packages.length === 0 ? (

          <h2>No Pending Packages</h2>

        ) : (

          packages.map((pkg) => (

            <div className="package-card" key={pkg.id}>

              <img
                src={
                  pkg.imageUrl
                    ? pkg.imageUrl
                    : "https://via.placeholder.com/300"
                }
                alt={pkg.packageName}
              />

              <h2>{pkg.packageName}</h2>

              <p>
                <b>Destination:</b> {pkg.destination}
              </p>

              <p>
                <b>Description:</b> {pkg.description}
              </p>

              <p>
                <b>Duration:</b> {pkg.duration}
              </p>

              <p>
                <b>Price:</b> ₹{pkg.price}
              </p>

              <p>
                <b>Hotel:</b> {pkg.hotelName}
              </p>

              <p>
                <b>Transport:</b> {pkg.transportType}
              </p>

              <p>
                <b>Activities:</b> {pkg.activities}
              </p>

              <p>
                <b>Seats:</b> {pkg.availableSeats}
              </p>

              <p>
                <b>Status:</b> {pkg.status}
              </p>

              <div className="action-buttons">

                <button
                  className="approve-btn"
                  onClick={() => approvePackage(pkg.id)}
                >
                  Approve
                </button>

                <button
                  className="reject-btn"
                  onClick={() => rejectPackage(pkg.id)}
                >
                  Reject
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default PendingPackages;