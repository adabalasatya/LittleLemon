import React, { useState } from 'react';
import './bookingform.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      date: '',
      time: '',
      guests: '',
      occasion: ''
    });
  };

  return (
    <div className='bookings'>
      <h2>Booking Form</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          <label htmlFor='book-date'>Choose Date:</label>
          <input
            id='book-date'
            name='date'
            type='date'
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor='book-time'>Choose Time:</label>
          <select
            id='book-time'
            name='time'
            value={formData.time}
            onChange={handleInputChange}
            required
          >
            <option value=''>Select a Time</option>
            <option value='09:00'>9:00 AM</option>
            <option value='10:00'>10:00 AM</option>
            <option value='11:00'>11:00 AM</option>
            <option value='12:00'>12:00 PM</option>
            <option value='7:00'>7:00 PM</option>
            <option value='8:00'>8:00 PM</option>
            <option value='9:00'>9:00 PM</option>
            <option value='10:00'>10:00 PM</option>
            <option value='11:00'>11:00 PM</option>
          </select>
        </div>

        <div>
          <label htmlFor='book-guests'>Number of Guests:</label>
          <input
            id='book-guests'
            name='guests'
            type='number'
            min='1'
            value={formData.guests}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor='book-occasion'>Occasion:</label>
          <select
            id='book-occasion'
            name='occasion'
            value={formData.occasion}
            onChange={handleInputChange}
          >
            <option value='Birthday'>Birthday</option>
            <option value='Anniversary'>Anniversary</option>
            {/* Add other occasion options */}
          </select>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
