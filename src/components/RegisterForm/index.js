import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn';
import { signInWithGoogle } from '../../firebase/utils';


import './style.css'

class RegisterForm extends Component {
    handleSubmit = async e => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Link to="/"><p className="form-logo"><i class="fas fa-infinity"></i></p></Link>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-icons">
                        <h4>Register for an account</h4>

                        <div className="input-group">
                            <span className="input-group-label">
                                <i className="fa fa-user"></i>
                            </span>
                            <input className="input-group-field" type="text" placeholder="Your name"/>
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

                        <div className="input-group">
                            <span className="input-group-label">
                                <i className="fa fa-key"></i>
                            </span>
                            <input className="input-group-field" type="text" placeholder="Re-enter password"/>
                        </div>
                    </div>

                    <button className="button submit-btn">Create your MDI Account</button>

                    <hr />

                    <p className="login-question">Already have an account?  <Link to="/signin">Sign-In</Link></p>
                    <p style={{textAlign: 'center', lineHeight: '5px'}}>OR</p>
                    <GoogleSignIn onClick={signInWithGoogle}>
                        <i className="fab fa-google" aria-hidden="true"></i> Sign-In with Google
                    </GoogleSignIn>
                </form>
            </div>    
        )
    }
}
export default RegisterForm