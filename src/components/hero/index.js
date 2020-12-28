import React from 'react';
import { Link } from "react-router-dom";


import './style.css'

export default function Hero() {
    return (
       
        <div className="hero-full-screen">

            {/* left blank to keep spacing layout */}
            <div className="top-content-section"></div>

            <div className="middle-content-section">
                <h1>FMOnline</h1>
                <h2>The Public Market in the Cloud</h2>
                <Link to="/viewall"><button className="button large">Shop With Us</button></Link>
            </div>

            {/* left blank to keep spacing layout */}
            <div className="bottom-content-section" data-magellan data-threshold="0"></div>

        </div>
    )
}
