import React from 'react';
import ItemCounter from '../ItemCounter';

import './style.css'


export default function StoreItem() {
    return (
            <div className="product-card">
                <div className="product-card-thumbnail">
                    <a href="#"><img src="https://placeimg.com/180/180/any" alt="img"/></a>
                </div>
                <h1 className="product-card-title"><a href="#">Product Name</a></h1>
                <span className="product-card-desc">sjfl kjas fja kdjfaklds jfalk sdjf alksdj lkasd j f lsdkjfsl kdjf lskdj flskdj flks djflsdjfl ksdj f lskdj f l skdj flsk djf lks dj fl sk  djflksd j f s l kdjfl skdj fls jnjnjnkj lnlnkn lknlkn lkn lnk nkn nlk nlkn lk lk k nknk </span>
                <span className="product-card-price">10 SCHRUTEBUCKS</span>
                <div className="product-card-colors">
                    <ItemCounter />
                </div>
            </div>
    )
}
