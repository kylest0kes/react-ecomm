import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

export default function SBCounter() {
    return (
        <div className="grid-x">
            <div className="cell small-8 medium-8 large-9">

            </div>
            <div className="cell small-4 medium-4 large-3">
            <Link to="/addsb" className="button button-rounded-hover">You have 0 Shrutebucks</Link>
            </div>
        </div>
    )
}
