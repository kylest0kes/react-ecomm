import React from 'react';
import SBCounter from '../SBCounter';

import './style.css'

export default function AddSBForm() {
    return (
        <div className="grid-x addsb-container">
            <div className="cell addsb-title">
                <p>slkdfjlskd</p>
            </div>
            <div className="cell small-12 medium-12 large-12 addsb-counter">
                <SBCounter />
            </div>
        </div>
    )
}
