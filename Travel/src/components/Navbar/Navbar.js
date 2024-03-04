import React, { useState } from 'react';
import '../Navbar/navbar.css';

const Navbar = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="ham">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span className="menu">
          <span className="hamburger"></span>
        </span>
        <ul style={{ display: isChecked ? 'block' : 'none' }}>
          <li><a href="#">HOME</a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#">BOOKING</a></li>
          <li><a href="#">TESTIMONIALS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </label>
      <div className="nav__container">
      <div className="nav">
        <div className='icon-container'>
          <div className='con'><a href="#">Home</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#">About</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#">Booking</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#">Testimonials</a></div>
        </div>
        <div className='icon-container'>
          <div className='con'><a href="#">Contact </a></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;