import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./pages/Packages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import NeedHelp from "./pages/NeedHelp";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import TourHistory from "./pages/TourHistory";
import Ticket from "./pages/Ticket";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TopHeader from "./components/TopHeader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    
    <BrowserRouter>
     
    <TopHeader />

      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/needhelp" element={<NeedHelp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/tourhistory" element={<TourHistory />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/login" element={<Login/>}/>

        <Route path="/register" element={<Register/>}/>  
      </Routes>
       <Footer />

    </BrowserRouter>
  );
}

export default App;