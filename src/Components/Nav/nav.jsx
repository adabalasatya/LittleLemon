import React from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logo from '../images/Logo .svg';
import './nav.css';
import Home from '../../Pages/home';
import Menu from '../../Pages/menu';
import Reservations from '../../Pages/reservations';
import OrderOnline from '../../Pages/orderonline';
import Login from '../../Pages/login';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';


function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  }


  return (
    <Router>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className='logo'>
          <img src={Logo} alt='logo' />
        </div>


        <button className='menu-icon' onClick={toggleMenu}>
          {menuOpen ? (
            <FontAwesomeIcon icon={faXmark} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>



          <div className='nav-bar'>
          <ul className={`nav-links ${menuOpen ? "visible" : ""}` }>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/reservations">Reservations</Link></li>
            <li><Link to="/order-online">Order Online</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
          </div>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </nav>
    </Router>
  );
}

export default Nav;

