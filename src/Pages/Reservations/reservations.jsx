import React from 'react'
import Header from '../../Components/Header/header'
import Booking from '../../Components/Booking/booking'
import Footer from '../../Components/Footer/footer'


const Reservations = () => {
  return (
    <div>
    <Header/>
    <hr className="long-line" />
    <Booking/>
    <Footer/>
    </div>
  )
}

export default Reservations
