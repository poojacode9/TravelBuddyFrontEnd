import "./PackageList.css";
import PackageCard from "./PackageCard";

function PackageList() {

  const packages = [

    {
      image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      title:"Goa Beach Tour",
      location:"Goa",
      duration:"4 Days / 3 Nights",
      price:"12,999",
      rating:"4.8"
    },

    {
      image:"https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800",
      title:"Manali Adventure",
      location:"Himachal Pradesh",
      duration:"6 Days / 5 Nights",
      price:"18,999",
      rating:"4.9"
    },

    {
      image:"https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800",
      title:"Kerala Backwaters",
      location:"Kerala",
      duration:"5 Days / 4 Nights",
      price:"16,499",
      rating:"4.7"
    },

    {
      image:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      title:"Kashmir Paradise",
      location:"Jammu & Kashmir",
      duration:"7 Days / 6 Nights",
      price:"24,999",
      rating:"5.0"
    }

  ];

  return (

    <section className="package-section">

      <h1>Popular Tour Packages</h1>

      <div className="package-container">

        {packages.map((tour,index)=>

          <PackageCard
            key={index}
            image={tour.image}
            title={tour.title}
            location={tour.location}
            duration={tour.duration}
            price={tour.price}
            rating={tour.rating}
          />

        )}

      </div>

    </section>

  );
}

export default PackageList;