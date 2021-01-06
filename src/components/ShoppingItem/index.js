import React from 'react';

import './style.css'

export default function ShoppingItem() {
    return (
        <div class="checkout-summary-item">
            <img src="https://placeimg.com/100/80/any" alt="img"/>
            <div class="item-name">
                <p className="cart-item-title">Product Name</p>
                <p className="quantity"><span class="title">Quantity: </span>3</p>
            </div>
            <div class="item-price">
                <p class="title">10 SB</p>
                <a href="#">Remove</a>
            </div>
        </div>
    )
}
