import React from 'react';

import './style.css'

export default function CartTotal() {
    return (
        <div>
            <div class="checkout-summary-details">
                <div class="left">
                    <p className="total-title"><strong>Total SB:</strong></p>
                </div>
                <div class="right">
                    <p>12 SB</p>
                </div>
            </div>
            <button class="button expanded proceed">Proceed to Checkout</button>
            <button class="button expanded clear-cart">Empty Your Cart</button>
        </div>
    )
}
