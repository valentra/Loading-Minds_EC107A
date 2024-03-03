import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Booking from "./components/Booking/Booking";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/contact";

import "./App.css"
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About/>
      <Booking/>
      <Testimonials/>
      <Contact/>
    </div>
  );
}