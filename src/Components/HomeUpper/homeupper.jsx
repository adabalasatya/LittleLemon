import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homeupper.css';
import Food from '../images/restauranfood.jpg';
import BookingForm from '../Booking/bookingform'; 

const Header = () => {
  const [showBooking, setShowBooking] = useState(false);
  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    setShowBooking(true);
    navigate('/reservations');
  };

  return (
    <header>
      <section className='content'>
        <div className='content-grid'>
          {!showBooking && (
            <div className='content-info'>
              <h1>Little Lemon</h1>
              <h2> Chicago</h2>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <button className='button-primary' onClick={handleButtonClick}>Reserve a table</button>
            </div>
          )}
          {!showBooking && (
            <div className='image-card'>
              <img className='food-img' src={Food} alt='food'/>
            </div>
          )}
          {showBooking && <BookingForm />}
        </div>
      </section>
    </header>
  );
};

export default Header;
