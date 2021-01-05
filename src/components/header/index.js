import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.jpg';


import './style.css';

export default function Header(props) {
    const { currentUser } = props;
    return (
        <div className="header" data-sticky-container>
            <div className="sticky sticky-topbar" data-sticky data-options="anchor: page; marginTop: 0; stickyOn: small;">
                <div className="grid-x">
                    <div className="cell small-4 medium-4 large-2">
                        <ul className="dropdown menu" data-dropdown-menu>
                            <li className="header-logo"><img src={logo} alt="logo"/></li>
                        </ul>
                    </div>
                    {/* BLANK IF NOT LOGGED IN */}
                    <div className="cell small-4 medium-4 large-8 welcome">
                        <h4 className="welcome">Welcome {currentUser}!</h4>
                    </div>
                    <div className="cell small-4 medium-4 large-2">
                        {currentUser && (
                            <ul className="menu links">
                                <li><Link to="/logout" className="button menu-btn logout-btn"><button type="button" className="menu-btn-text">Logout</button></Link></li>
                            </ul>
                        )}

                        {!currentUser && (
                            <ul className="menu links">
                                <li><Link to="/register" className="button menu-btn"><button type="button" className="menu-btn-text">Register</button></Link></li>
                                <li><Link to="/signin" className="button menu-btn"><button type="button" className="menu-btn-text">Sign-In</button></Link></li>
                            </ul>
                        )}
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

Header.defaultProps = {
    currentUser: null
}
