import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GoogleSignIn from '../GoogleSignIn';
import { signInWithGoogle } from '../../firebase/utils';


import './style.css'

class SignInForm extends Component {
    handleSubmit = async e => {
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <Link to="/"><p className="form-logo"><i class="fas fa-infinity"></i></p></Link>
                <form onSubmit={this.handleSubmit}>
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

                    <p className="login-question">New to DMI?  <Link to="/register">Create an account</Link></p>
                    <p style={{textAlign: 'center', lineHeight: '5px'}}>OR</p>
                    <GoogleSignIn onClick={signInWithGoogle}>
                        <i className="fab fa-google" aria-hidden="true"></i> Sign-In with Google
                    </GoogleSignIn>
                </form>
            </div>
        )
    }
}

export default SignInForm