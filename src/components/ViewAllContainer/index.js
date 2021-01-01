import React from 'react';
import ItemCategoryTab from '../ItemCategoryTab';
import ShoppingItem from '../ShoppingItem';
import StoreItem from '../StoreItem';


import './style.css';

export default function ViewAllContainer() {
    return (
        <div className="grid-x all-container">
            <div className="cell small-2 medium-3 large-2 grid-left">
                <ItemCategoryTab />
                <ItemCategoryTab />
                <ItemCategoryTab />
                <ItemCategoryTab />
            </div>
            <div className="cell small-6 medium-5 large-7 grid-mid">
                <StoreItem />
                <StoreItem />
                <StoreItem />
                <StoreItem />
                <StoreItem />
                <StoreItem />
                <StoreItem />   
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
