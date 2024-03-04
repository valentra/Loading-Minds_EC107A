import React from 'react';
import '../Navbar/navbar.css';

const Navbar = () => {
  return (

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
      
    
  );
};

export default Navbar;