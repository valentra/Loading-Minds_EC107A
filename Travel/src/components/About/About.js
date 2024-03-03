import React from 'react'
import image from "../../assets/About.png"
import "../About/About.css"
const About = () => {
  return (
    <div className="about-container">
    <div className="about-section">
            <div className="text-section">
                <h1>ABOUT US</h1>
                <p>Welcome to <b>Travela</b>, where seamless travel experiences await! As passionate adventurers ourselves, we're dedicated to redefining the way you explore the world.

                    With a user-friendly booking platform offering flights and train tickets tailored to your preferences and budget, we make planning your journey a breeze. But we're more than just a booking site – we're your trusted companion, offering expert guidance and fostering a vibrant community of fellow travelers through our review section.

                    Join us on this extraordinary adventure at [Your Travel Website Name], where every journey begins with endless possibilities.</p>
            </div>
            <div className="image-section">
                <img src={image} alt="About us" />
            </div>
        </div>
        </div>
  )
}

export default About
