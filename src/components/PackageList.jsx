import "./PackageList.css";
import PackageCard from "./PackageCard";

function PackageList({ packages = [] }) {
  console.log(packages);
  return (
    <section className="package-section">
      <h1>Popular Tour Packages</h1>

      <div className="package-container">
        {packages.length > 0 ? (
          packages.map((tour) => (
            <PackageCard
              key={tour.id}
              id={tour.id}
              image={tour.imageUrl}
              title={tour.packageName}
              location={tour.destination}
              duration={tour.duration}
              price={tour.price}
              rating="4.8"
            />
          ))
        ) : (
          <h3>No packages found.</h3>
        )}
      </div>
    </section>
  );
}

export default PackageList;