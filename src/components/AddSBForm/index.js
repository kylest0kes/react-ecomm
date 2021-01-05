import React from 'react';
import { Link } from 'react-router-dom';
import SBCounter from '../SBCounter';

import './style.css'

export default function AddSBForm(props) {
    const { currentUser, displayName } = props;

    return (
        <div className="grid-x addsb-container">
            {currentUser && (
                <div className="user-addsb">
                    <div className="cell addsb-title">
                        <p>Hello {displayName}!</p>
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
                </div>
            )}

            {!currentUser && (
                <div className="nouser-addsb">
                    <div className="cell addsb-title">
                        <p>Hello Guest!</p>
                    </div>
                    <div className="cell addsb-subtitle">
                        <p>Looks like you don't have a DMI Account <i class="far fa-frown"></i></p>
                    </div>
                    <div className="cell addsb-subtitle">
                        <p>Get signed up and start spending your Schrutebucks today!</p>
                    </div>
                    <button className="nouser-addsb-signuplink"><Link to="/register" className="signuplink-text">Create an account</Link></button>
                </div>
            )}
            
        </div>
    )
}

AddSBForm.defaultProps = {
    displayName: null
}
