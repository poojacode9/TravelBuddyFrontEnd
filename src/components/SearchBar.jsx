import { useState } from "react";
import axios from "axios";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [travelers, setTravelers] = useState("1");

  const handleSearch = (e) => {
  e.preventDefault();
  onSearch(destination);
};

  return (
    <div className="search-container">
      <h2>Find Your Perfect Trip</h2>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <input
          type="date"
          value={travelDate}
          onChange={(e) => setTravelDate(e.target.value)}
        />

        <select
          value={travelers}
          onChange={(e) => setTravelers(e.target.value)}
        >
          <option value="1">1 Traveler</option>
          <option value="2">2 Travelers</option>
          <option value="3">3 Travelers</option>
          <option value="4">4+ Travelers</option>
        </select>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;