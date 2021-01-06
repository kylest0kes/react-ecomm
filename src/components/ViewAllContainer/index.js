import React from 'react';
import CartTotal from '../CartTotal';
import ItemCategoryTab from '../ItemCategoryTab';
import ShoppingItem from '../ShoppingItem';
import StoreItem from '../StoreItem';


import './style.css';

export default function ViewAllContainer(props) {
    const { currentUser } = props;

    return (
        <div className="grid-x all-container">
            <div className="cell small-2 medium-3 large-2 grid-left">
                <ItemCategoryTab />
                <ItemCategoryTab />
                <ItemCategoryTab />
                <ItemCategoryTab />
            </div>
            {currentUser && (
                <div className="cell small-6 medium-5 large-7 grid-mid">
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />   
                </div>
            )}

            {!currentUser && (
                <div className="cell small-10 medium-9 large-10 grid-mid">
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />
                    <StoreItem currentUser={currentUser} />   
                </div>
            )}
        
            {currentUser && (
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
                    <CartTotal />
                </div>
            )}

        </div>
    )
}
