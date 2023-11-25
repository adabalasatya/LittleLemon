mport React from 'react';
import BookingForm from './bookingform'
import ConfirmedBooking from './confirmedbooking';

const ParentComponent = () => {
  return (
    <div>
     <BookingForm/>
     <ConfirmedBooking/>
    </div>
  );
};

export default ParentComponent;