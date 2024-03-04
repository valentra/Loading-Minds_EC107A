import React from 'react'
import Navbar from "../Navbar/Navbar";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import './Home.css'

const Home = () => {
  return (
    <div className='main__container section__padding'>
      <p className='text'>Discover endless journeys with Travela: where every click sparks adventure!</p>
      <div className='block'>
      <div className='destination' style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#333', fontSize: '1.2rem' }}>
          <CiLocationOn style={{ color: '#BB6A8B', fontSize: '2rem' }} /> Destination
      </div>
      <div className='date' style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#333', fontSize: '1.2rem' }}>
          <MdOutlineDateRange style={{ color: '#BB6A8B', fontSize: '2rem' }} /> Date: 01/10/2023
      </div>
      <div className='people' style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#333', fontSize: '1.2rem' }}>
          <IoMdPerson style={{ color: '#BB6A8B', fontSize: '2rem' }} /> People: 2 Adults, 1 Child
      </div>
      <div className='book your trip'>
        <button className="bookTripButton">
          Book your trip!
        </button>
      </div>
    </div>
    </div>
  )
}

export default Home