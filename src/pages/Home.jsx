import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PackageList from "../components/PackageList";
import WhyChooseUs from "../components/WhyChooseUs";
import Destinations from "../components/Destinations";
import Testimonials from "../components/Testimonials";

function Home() {

  const [packages, setPackages] = useState([]);

  // Load all approved packages
  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/packages");
      setPackages(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Search packages
  const searchPackages = async (destination) => {
    try {

      if (destination.trim() === "") {
        fetchPackages();
        return;
      }

      const response = await axios.get(
        "http://localhost:8080/packages/search",
        {
          params: {
            destination,
          },
        }
      );

      setPackages(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Hero />

      <SearchBar onSearch={searchPackages} />

      <PackageList packages={packages} />

      <WhyChooseUs />

      <Destinations />

      <Testimonials />
    </>
  );
}

export default Home;