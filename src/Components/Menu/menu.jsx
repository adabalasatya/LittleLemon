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

      <div className='cards-container'>
      {recipes.map((recipe) => (
        <div className='cards' key={recipe.id}>

          <img src={recipe.image} alt='' />

          <div className='meal-titles'>
            <h5>{recipe.title}</h5>
          </div>

          <div className='meal-prices'>
          <p>${recipe.price.toFixed(2)}</p>
          </div>


          <div className='meal-footer'>
          <p>{recipe.description}</p>
          </div>

          <div>
            <h1>Order a delivery </h1>
          </div>

        </div>
      ))}
      </div>

    </div>
  );
}

export default Main;

