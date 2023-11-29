import React from 'react';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
   <div>
     <div className="confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" className="check-icon" />
      <div className="booking-details">
        <h1 className="confirmation-header">Your reservation has been confirmed.</h1>
        <p className="details-text">You will receive an email with all the details.</p>
      </div>
    </div>
   </div>
  );
};

export default ConfirmedBooking;
