import TopHeader from "../components/TopHeader";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import PackageList from "../components/PackageList";
import WhyChooseUs from "../components/WhyChooseUs";
import Destinations from "../components/Destinations";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Hero />
      <SearchBar />
      <PackageList />
      <WhyChooseUs />
      <Destinations />
      <Testimonials />
      <Footer />
    </>
  );
}

export default Home;