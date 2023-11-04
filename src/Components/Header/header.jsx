import React from 'react'
import '../Header/header.css'
import Food from '../images/restauranfood.jpg'
const header = () => {
  return (
    <header>
       <section className='content'>
      <div className='content-grid'>
      <div className='content-info'>
    <h1>Little Lemon</h1>
    <h2> Chicago</h2>
    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
    <button className='button-primary'>Reserve a table</button>
    </div>
    <div className='image-card'>
    <img className='food-img' src={Food} alt='food'/>
    </div>
      </div>
    </section>
    </header>
  )
}

export default header

