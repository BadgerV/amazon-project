import React from 'react'

import './checkout.css'

import Subtotal from './Subtotal'

function CheckOut() {
    return <div className='checkout'>
        <div className="checkout__left">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/SmartHome/StorefrontRefresh/Plug_BannerCB422622693_.jpeg" alt="" className="checkout__ad" />
            <div>
                <h2 className="checkout__title">Your Shopping Basket</h2>

                {/*BasketItem */}
                {/*BasketItem */}
                {/*BasketItem */}
                {/*BasketItem */}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal />
        </div>
    </div>
}

export default CheckOut;