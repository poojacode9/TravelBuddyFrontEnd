import { Routes, Route } from "react-router-dom";

import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import NeedHelp from "./pages/NeedHelp";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import TourHistory from "./pages/TourHistory";
import Ticket from "./pages/Ticket";
import Booking from "./pages/Booking";
import GuideDashboard from "./pages/GuideDashboard";
import AdminDashboard from "./pages/AdminDashboard";
function App() {

  return (

    <>

      <TopHeader />

      <Navbar />


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/packages" element={<Packages />} />
    
        <Route path="/booking/:id" element={<Booking />} />

        <Route path="/guide-dashboard" element={<GuideDashboard />} />

        <Route 
          path="/admin-dashboard" 
          element={<AdminDashboard />} 
          />

          
        <Route 
          path="/privacypolicy" 
          element={<PrivacyPolicy />} 
        />


        <Route 
          path="/contact" 
          element={<Contact />} 
        />


        <Route 
          path="/needhelp" 
          element={<NeedHelp />} 
        />


        <Route 
          path="/login" 
          element={<Login />} 
        />


        <Route 
          path="/register" 
          element={<Register />} 
        />


        <Route 
          path="/profile" 
          element={<Profile />} 
        />


        <Route 
          path="/changepassword" 
          element={<ChangePassword />} 
        />


        <Route 
          path="/tourhistory" 
          element={<TourHistory />} 
        />


        <Route 
          path="/ticket" 
          element={<Ticket />} 
        />


      </Routes>


      <Footer />

    </>

  );

}

export default App;