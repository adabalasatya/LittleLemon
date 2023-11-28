import React from 'react';
import './bookingform.css'
import { Link } from 'react-router-dom';

const ConfirmedBooking = () => {
  return (
    <div className='confirm'>
      <div className='confirmation-message'>
        <h1>Your reservation has been confirmed!</h1>
        <p>You will receive an email with all the details</p>
        <Link to="/" className='home-link'>
          <button className='home-button'>Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
