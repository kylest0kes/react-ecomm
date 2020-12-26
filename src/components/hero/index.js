import React from 'react'

import './style.css'

export default function Hero() {
    return (
       
        <div className="hero-full-screen">

        <div className="top-content-section"></div>

        <div className="middle-content-section">
            <h1>FMOnline</h1>
            <h2>The Public Market in the Cloud</h2>
            <button className="button large">Shop With Us</button>
        </div>

        <div className="bottom-content-section" data-magellan data-threshold="0"></div>

        </div>
    )
}
