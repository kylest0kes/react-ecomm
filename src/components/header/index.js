import React from 'react';
import { Link } from 'react-router-dom';


import './style.css';

export default function Header() {
    return (
        <div className="top-bar-container" data-sticky-container>
            <div className="sticky sticky-topbar" data-sticky data-options="anchor: page; marginTop: 0; stickyOn: small;">
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="menu-text">FMOnline</li>
                            {/* <li><Link className="menu-links" to="/viewall">View All</Link></li>
                            <li><Link className="menu-links" to="#">View Recently Added</Link></li> */}
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu">
                            <li><Link to="/register" className="button menu-btn"><button type="button" className="menu-btn-text">Register</button></Link></li>
                            <li><Link to="/login" className="button menu-btn"><button type="button" className="menu-btn-text">Log In</button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
