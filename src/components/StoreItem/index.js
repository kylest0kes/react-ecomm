import React from 'react';

import './style.css'


export default function StoreItem() {
    return (
            <div className="product-card">
                <div className="product-card-thumbnail">
                    <a href="#"><img src="https://placehold.it/180x180"/></a>
                </div>
                <h2 className="product-card-title"><a href="#">Product Name</a></h2>
                <span className="product-card-desc">Product Description</span>
                <span className="product-card-price">$9.99</span><span className="product-card-sale">$12.99</span>
                <div className="product-card-colors">
                    <button href="#" className="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                    <button href="#" className="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                    <button href="#" className="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                    <button href="#" className="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                </div>
            </div>
    )
}
