import React from 'react';

import './style.css'

export default function RegisterForm() {
    return (
        <form>
            <div className="form-icons">
                <h4>Register for an account</h4>

                <div className="input-group">
                    <span className="input-group-label">
                        <i className="fa fa-user"></i>
                    </span>
                    <input className="input-group-field" type="text" placeholder="Full name"/>
                </div>

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

            <button className="button submit-btn">Sign Up</button>
        </form>
    )
}
