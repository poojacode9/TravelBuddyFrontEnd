import "./Destinations.css";

function Destinations() {
  const destinations = [
    {
      name: "Goa",
      image:
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
    },
    {
      name: "Manali",
      image:
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
    },
    {
      name: "Kerala",
      image:
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
    },
    {
      name: "Kashmir",
      image:
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=800",
    },
    {
      name: "Jaipur",
      image:
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
    },
    {
      name: "Andaman",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    },
  ];

  return (
    <section className="destination-section">
      <h2>Popular Destinations</h2>

      <div className="destination-grid">
        {destinations.map((destination, index) => (
          <div className="destination-card" key={index}>
            <img src={destination.image} alt={destination.name} />
            <div className="destination-overlay">
              <h3>{destination.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinations;