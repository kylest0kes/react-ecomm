import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

export default function LogInForm() {
    return (
        <div>
            <Link to="/viewall"><p className="form-logo"><i class="fas fa-store"></i></p></Link>
            <form>
                <div className="form-icons">
                    <h4>Sign-In</h4>

                    <div className="input-group">
                        <span className="input-group-label">
                            <i className="fa fa-envelope"></i>
                        </span>
                        <input className="input-group-field" type="text" placeholder="Email"/>
                    </div>

                    <div className="input-group">
                        <span className="input-group-label">
                            <i className="fa fa-key"></i>
                        </span>
                        <input className="input-group-field" type="text" placeholder="Password"/>
                    </div>

                </div>

                <button className="button submit-btn">Sign-In</button>

                <hr />

                <p className="login-question">New to FMOnline?  <Link to="/register">Create an account</Link></p>

            </form>
        </div>
    )
}
