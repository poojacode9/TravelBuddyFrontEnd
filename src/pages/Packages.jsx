import { useEffect, useState } from "react";
import axios from "axios";
import PackageList from "../components/PackageList";

function Packages() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/packages");
      setPackages(response.data);
    } catch (error) {
      console.error("Error fetching packages:", error);
    }
  };

  return <PackageList packages={packages} />;
}

export default Packages;