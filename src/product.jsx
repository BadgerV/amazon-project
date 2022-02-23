import React from 'react'

import './product.css'

function product() {
  return (
    <div className='product'>
        <div className="product__info">
            <p>The startup</p>
            <p className='product__price'>
                <small>$</small>
                <strong>29.99</strong>
            </p>
            <div className="product__rating">
                <p>⭐</p>
            </div>
        </div>

        <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg" alt="" />
        <button>Add to Basket</button>
    </div>
  )
}

export default product