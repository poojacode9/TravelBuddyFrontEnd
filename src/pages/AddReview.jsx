import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function AddReview() {

  const { user } = useAuth();

  const { state } = useLocation();

  const navigate = useNavigate();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");


  const handleSubmit = async (e) => {

    e.preventDefault();


    const reviewData = {

      rating: Number(rating),

      comment: comment,

      userId: user.id,

      packageId: state.packageId

    };


    try {

      const token = localStorage.getItem("token");


      await axios.post(
        "http://localhost:8080/reviews",
        reviewData,
        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      );


      alert("Review submitted successfully");

      navigate("/tourhistory");


    }
    catch(error){

      console.log(error.response);
      alert("Failed to submit review");

    }

  };


  return (

    <div>

      <h1>
        Give Review
      </h1>


      <form onSubmit={handleSubmit}>


        <label>
          Rating
        </label>


        <select
          value={rating}
          onChange={(e)=>setRating(e.target.value)}
        >

          <option value="5">
            ⭐⭐⭐⭐⭐
          </option>

          <option value="4">
            ⭐⭐⭐⭐
          </option>

          <option value="3">
            ⭐⭐⭐
          </option>

          <option value="2">
            ⭐⭐
          </option>

          <option value="1">
            ⭐
          </option>


        </select>



        <br/>


        <label>
          Comment
        </label>


        <textarea

          value={comment}

          onChange={(e)=>setComment(e.target.value)}

          required

        />



        <button type="submit">

          Submit Review

        </button>



      </form>


    </div>

  );

}


export default AddReview;