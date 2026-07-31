import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddTourPackage.css";

function AddTourPackage() {

  const navigate = useNavigate();

  const [packageData, setPackageData] = useState({

    packageName: "",
    destination: "",
    description: "",
    duration: "",
    price: "",
    hotelName: "",
    transportType: "",
    activities: "",
    availableSeats: "",
    image: null

  });


  const handleChange = (e) => {

    setPackageData({

      ...packageData,

      [e.target.name]: e.target.value

    });

  };


  const handleSubmit = async (e) => {

  e.preventDefault();
   console.log("Button clicked");
  try {

    const token = localStorage.getItem("token");

    // Upload Image
    const imageFormData = new FormData();
    imageFormData.append("image", packageData.image);
console.log("Uploading image...");
    const uploadResponse = await axios.post(
      "http://localhost:8080/images/upload",
      imageFormData,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
console.log("Upload response:", uploadResponse.data);
    const fileName = uploadResponse.data.fileName;

    // Create Package JSON
    const newPackage = {
      packageName: packageData.packageName,
      destination: packageData.destination,
      description: packageData.description,
      duration: packageData.duration,
      price: packageData.price,
      hotelName: packageData.hotelName,
      transportType: packageData.transportType,
      activities: packageData.activities,
      availableSeats: packageData.availableSeats,
      imageUrl: fileName
    };

    // Save Package
    await axios.post(
      "http://localhost:8080/packages",
      newPackage,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log("Package saved successfully!");

    alert("Tour Package Added Successfully!");
    navigate("/guide-dashboard");

  } catch (error) {

    console.log(error);

    alert(
      error.response?.data?.message ||
      "Failed to add package"
    );

  }

};

  return (

    <div className="package-container">


      <div className="package-card">


        <h1>Add Tour Package</h1>


        <form onSubmit={handleSubmit}>


          <input
            name="packageName"
            placeholder="Package Name"
            value={packageData.packageName}
            onChange={handleChange}
            required
          />


          <input
            name="destination"
            placeholder="Destination"
            value={packageData.destination}
            onChange={handleChange}
            required
          />


          <textarea
            name="description"
            placeholder="Description"
            value={packageData.description}
            onChange={handleChange}
            required
          />


          <input
            name="duration"
            placeholder="Duration (Example: 5 Days)"
            value={packageData.duration}
            onChange={handleChange}
            required
          />


          <input
            type="number"
            name="price"
            placeholder="Price"
            value={packageData.price}
            onChange={handleChange}
            required
          />


          <input
            name="hotelName"
            placeholder="Hotel Name"
            value={packageData.hotelName}
            onChange={handleChange}
            required
          />


          <input
            name="transportType"
            placeholder="Transport Type"
            value={packageData.transportType}
            onChange={handleChange}
            required
          />


          <input
            name="activities"
            placeholder="Activities"
            value={packageData.activities}
            onChange={handleChange}
            required
          />


          <input
            type="number"
            name="availableSeats"
            placeholder="Available Seats"
            value={packageData.availableSeats}
            onChange={handleChange}
            required
          />


                    <input
            type="file"
            name="image"
            accept="image/*"
            onChange={(e) =>
              setPackageData({
                ...packageData,
                image: e.target.files[0],
              })
            }
            required
          />


          <button>
            Add Package
          </button>


        </form>


      </div>


    </div>

  );

}


export default AddTourPackage;