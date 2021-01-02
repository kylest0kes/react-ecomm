import React from 'react';

import './style.css'

export default function ShoppingItem() {
    return (
        <div class="checkout-summary-item">
            <img src="https://placeimg.com/100/80/any"/>
            <div class="item-name">
                <p className="cart-item-title">Product Name</p>
                <p><span class="title">Quantity: </span>3</p>
            </div>
            <div class="item-price">
                <p class="title">$24.99</p>
                <a href="#">Remove</a>
            </div>
        </div>
    )
}
