import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";
import Destination from "./components/Destination/Destination";

export default function App() {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <About/>
      <Booking/>
      <Destination/>
      {/* <div className="App">
      <Testimonials/>
      </div> */}
      
      <Contact/>
      <Footer/>
    </div>
  );
}