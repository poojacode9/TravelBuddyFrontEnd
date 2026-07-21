import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <h2>Find Your Perfect Trip</h2>

      <form className="search-form">
        <input type="text" placeholder="Destination" />

        <input type="date" />

        <select>
          <option>1 Traveler</option>
          <option>2 Travelers</option>
          <option>3 Travelers</option>
          <option>4+ Travelers</option>
        </select>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;