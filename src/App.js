import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/home';
import Menu from './Pages/Menu/menu';
import Reservations from './Pages/Reservations/reservations';
import OrderOnline from './Pages/Order Online/orderonline';
import Login from './Pages/Login/login';

import HomeUpper from './Components/HomeUpper/homeupper';

function App() {
  
  return (
    <>
         <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Reservations />} />
        <Route path="/booking" element={<HomeUpper/>} />

      </Routes>
    </Router>
    </>

  );
}

export default App;
