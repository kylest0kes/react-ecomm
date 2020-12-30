import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';


import './style.css';

export default function Header() {
    return (
        <div className="header" data-sticky-container>
            <div className="sticky sticky-topbar" data-sticky data-options="anchor: page; marginTop: 0; stickyOn: small;">
                <div className="grid-x">
                    <div className="cell small-6 medium-6 large-10">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="header-logo"><img src={logo} alt="logo"/></li>
                        </ul>
                    </div>
                    <div className="cell small-6 medium-6 large-2">
                        <ul className="menu links">
                            <li><Link to="/register" className="button menu-btn"><button type="button" className="menu-btn-text">Register</button></Link></li>
                            <li><Link to="/signin" className="button menu-btn"><button type="button" className="menu-btn-text">Sign-In</button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
