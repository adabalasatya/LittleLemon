import React from 'react'
import recipes from '../../recipes'
import './menu.css'

function Main() {
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h1>This week specials!</h1>
        <button className='btn'>Online Menu</button>
      </div>

      <div className='cards'>
      {recipes.map((recipe) => (
        <div className='cards-container' key={recipe.id}>

         <div className='meal-image'>
          <img src={recipe.image} alt='' />
         </div>

         <div className='meal-details'>
          <div className='meal-titles'>
            <h5>{recipe.title}</h5>
          </div>

          <div className='meal-prices'>
          <p>${recipe.price.toFixed(2)}</p>
          </div>


          <div className='meal-footer'>
          <p>{recipe.description}</p>
          </div>
         </div>

          <div className='order-delivery'>
            <h1>Order a delivery </h1>
          </div>

        </div>
      ))}
      </div>

    </div>
  );
}

export default Main;

