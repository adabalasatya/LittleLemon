import React from 'react';
import './orderonline.css';
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/footer'

const OrderOnline = () => {
  return (
    <>
    <Header/>
    <hr className="long-line" />
      <div className="container">
      <div className="reservation-details">
        <h3>Reservation Details</h3>
        <p>Date: November 1, 2023</p>
        <p>Time: 10:00 AM</p>

        <br></br>

        <h3>Reservation Details</h3>
        <p>Date: November 10, 2023</p>
        <p>Time: 12:00 PM</p>

        <br></br>

        <h3>Reservation Details</h3>
        <p>Date: November 20, 2023</p>
        <p>Time: 7:00 PM</p>

        <br></br>

        <h3>Reservation Details</h3>
        <p>Date: November 30, 2023</p>
        <p>Time: 12:00 AM</p>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OrderOnline;
