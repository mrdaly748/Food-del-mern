import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite food here </h2>
            <p>Welcome to <strong>Potato-Tomato</strong>, where delicious, nutritious meals are just a click away! 
            Enjoy chef-crafted meals made with high-quality ingredients, delivered fresh to your doorstep. Whether you’re looking for healthy, high-protein options or delicious comfort food, we make mealtime effortless. Order now and experience convenience without compromise! </p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header