import React from 'react';
import { Link } from 'react-router-dom';
import SBCounter from '../SBCounter';

import './style.css'

export default function AddSBForm() {
    return (
        // DISABLED IF NOT REGISTERED
        <div className="grid-x addsb-container">
            <div className="cell addsb-title">
                <p>Hello Username!</p>
            </div>
            <div className="cell addsb-subtitle">
                <p>How many Schrutebucks would you like to add?</p>
            </div>
            <div className="cell sbs-to-add">
                <input placeholder="Enter a valid amount"></input>
            </div>
            <div className="cell small-12 medium-12 large-12 addsb-counter">
                <SBCounter />
            </div>
            <p className="new-question">New to DMI?  <Link to="/register">Create an account</Link></p>
        </div>
    )
}
