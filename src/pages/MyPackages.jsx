import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./MyPackages.css";

function MyPackages() {

  const navigate = useNavigate();

  const { user } = useAuth();

  const [packages, setPackages] = useState([]);

  useEffect(() => {

    if (user?.id) {
      fetchPackages();
    }

  }, [user]);



  const fetchPackages = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        `http://localhost:8080/packages/guide/${user.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPackages(response.data);

    } catch (error) {

      console.log("ERROR:", error);

      if (error.response) {
        console.log("STATUS:", error.response.status);
        console.log("DATA:", error.response.data);
      }

      alert("Unable to fetch packages");
    }

  };



  const deletePackage = async (id) => {

    try {

      const token = localStorage.getItem("token");

      await axios.delete(
        `http://localhost:8080/packages/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Package deleted successfully!");

      fetchPackages();

    } catch (error) {

      console.log(error);

      alert("Unable to delete package");

    }

  };



  return (

    <div className="my-package-container">

      <h1>My Tour Packages</h1>

      <div className="package-list">

        {packages.length === 0 ? (

          <h3>No packages added yet</h3>

        ) : (

          packages.map((pkg) => (

            <div className="package-box" key={pkg.id}>

              <img
                src={pkg.imageUrl}
                alt={pkg.packageName}
              />

              <h2>{pkg.packageName}</h2>

              <p>
                <b>Destination:</b> {pkg.destination}
              </p>

              <p>
                <b>Duration:</b> {pkg.duration}
              </p>

              <p>
                <b>Price:</b> ₹{pkg.price}
              </p>

              <p>
                <b>Status:</b> {pkg.status}
              </p>

              <div className="package-actions">

                <button
                  className="edit-btn"
                  onClick={() =>
                    navigate(`/guide/edit-package/${pkg.id}`)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deletePackage(pkg.id)}
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>

  );

}

export default MyPackages;