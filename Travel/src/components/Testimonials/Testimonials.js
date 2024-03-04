import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import "../Testimonials/Testimonials.css"; 
export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Amazing Experience with Travela!",
      description:
        "I recently used Travela to plan my dream vacation, and I couldn't be happier with the experience. The website's user-friendly interface made it incredibly easy to browse through various destinations, accommodations, and activities. What impressed me the most was the extensive range of options available, catering to every type of traveler and budget. From booking flights to securing hotel reservations and arranging local tours, Travela ensured a seamless and stress-free planning process. Their customer service was also exceptional, promptly addressing any inquiries I had. Thanks to Travela, my trip exceeded all expectations, and I can't wait to use their services again for my next adventure!",
      icon: require("../../assets/hero.png"),
    },
    {
      title: "Highly Recommend Travela for Hassle-Free Travel Planning!",
      description:
        "I stumbled upon Travela while searching for a reliable platform to book my family vacation, and I'm so glad I did! Travela's intuitive website design made it effortless to navigate and find the perfect vacation package for us.",
      icon: require("../../assets/hero.png"),
    },
    {
      title: "Exceptional Service from Travela!",
      description:
        "I've been a loyal customer of Travela for several years now, and they never cease to amaze me with their exceptional service. Whether it's a weekend getaway or an international adventure, Travela has always been my go-to platform for all my travel needs.",
      icon: require("../../assets/hero.png"),
    },
  ];
  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item, index) => {
  return <CarouselItem key={index} item={item} width={"100%"} />;
})}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span className="material-symbols-outlined">back arrow</span>{" "}
        </button>
        <div className="indicators">
        {items.map((item, index) => {
  return (
    <button
      key={index}
      className="indicator-buttons"
      onClick={() => {
        updateIndex(index);
      }}
    >
      <span
        className={`material-symbols-outlined ${
          index === activeIndex
            ? "indicator-symbol-active"
            : "indicator-symbol"
        }`}
      >
        radio_button_checked
      </span>
    </button>
  );
})}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span className="material-symbols-outlined">front arrow</span>
        </button>
      </div>
    </div>
  );
};
export default Testimonials