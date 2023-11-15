import React from 'react'
import Logo from "../images/small_logo.png"
import "../Footer/footer.css"

const footer = () => {
  return (
    <footer>
        <section className='info'>
            <div className='company-info'>
                <img src={Logo} alt='img' />
                <p>We are family Owned Mediterraneran restaurant focused on
                    traditional recipes servred with a modern twist.</p>
            </div>


            <div className='links'>
                <h3>Important Links</h3>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>Order Online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>

            <div className='contact'>
                <h3>Contact</h3>
                <ul>
                    <li>Address: <span>123 TownCity, USA</span></li>
                    <li>Phone: <span>++ 0123 456 789</span></li>
                    <li>Email: <span>little@lemon.com</span></li>
                </ul>
            </div>

            <div className='media-links'>
                <h3>Social Media Links</h3>
                <ul>
    <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
    <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
    <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
</ul>
            </div>
        </section>
    </footer>
  )
}

export default footer
