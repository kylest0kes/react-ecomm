import React from 'react';
import ShoppingItem from '../ShoppingItem';


import './style.css';

export default function ViewAllContainer() {
    return (
        <div className="grid-x all-container">
            <div className="cell small-2 medium-3 large-2 grid-left">
                <h1>fuck</h1>
                <h1 style={{backgroundColor: "rgb(201, 201, 201)"}}>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
            </div>
            <div className="cell small-6 medium-5 large-7 grid-mid">
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
                <h1>fuck</h1>
            </div>
            <div className="cell small-4 medium-4 large-3 shopping-cart">
                <h4 style={{backgroundColor: "rgb(88, 126, 182)", textAlign: "center", color: "white"}}>Shopping Cart</h4>
                <div className="shopping-item-container">
                    <ShoppingItem />
                    <ShoppingItem />
                    <ShoppingItem />
                    <ShoppingItem />
                    <ShoppingItem />
                    <ShoppingItem />
                    <ShoppingItem />
                    <ShoppingItem />
                    <ShoppingItem />
                </div>
                
            </div>
        </div>
    )
}
