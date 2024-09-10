import React from 'react'

import { NavLink } from 'react-router-dom'
function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <a href="#Herosection">Harris Imran</a>
                    <span className="line" id="line1"></span>
                    <span className="line" id="line2"></span>
                </li>
                <li>
                    <a href="#about">About</a>
                    <span className="line" id="line1"></span>
                    <span className="line" id="line2"></span>
                </li>
                <li>
                    <a href="Harris Frontend Resume.pdf" download={"Harris Frontend Resume.pdf"}>Resume</a>
                    <span className="line" id="line1"></span>
                    <span className="line" id="line2"></span>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                    <span className="line" id="line1"></span>
                    <span className="line" id="line2"></span>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
