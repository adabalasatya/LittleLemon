import React from 'react'
import Logo from "../images/logo-white.png"
import "../Footer/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';




const footer = () => {
  return (
    <footer className='site-footer'>
        <section>
            <div className='company-info'>
                <img src={Logo} alt='img' />
            </div>


            <div className='links'>
                <h3>SITE MAP</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>

            <div className='contact'>
            <h3>CONTACT US</h3>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 TownCity, USA
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhone} /> ++ 0123 456 789
                </li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} />little@lemon.com
                 </li>
            </ul>
        </div>


            <div className='media-links'>
      <h3>CONNECT WITH US</h3>
      <ul>
        <li>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
    </div>

        </section>
    </footer>
  )
}

export default footer
