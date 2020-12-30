import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';


import './style.css';

export default function Header() {
    return (
        <header>
        <div className="top-bar-container header" data-sticky-container>
            <div className="sticky sticky-topbar" data-sticky data-options="anchor: page; marginTop: 0; stickyOn: small;">
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="header-logo"><img src={logo} alt="logo"/></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li><Link to="/register" className="button menu-btn"><button type="button" className="menu-btn-text">Register</button></Link></li>
                            <li><Link to="/signin" className="button menu-btn"><button type="button" className="menu-btn-text">Sign-In</button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </header>
    )
}
