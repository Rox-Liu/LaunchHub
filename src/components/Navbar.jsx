import React, { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {

    return (
        <nav>
            <div className="logo"></div>
            <label htmlFor="checkbox-menu" className="label-menu">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
                </svg>
            </label>
            <input type="checkbox" id="checkbox-menu"></input>
            <div className="menu-list">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/about">About Us</Link>
                </div>
                <div>
                    <AnchorLink to="/#services">Services</AnchorLink>
                </div>
                <div>
                    <AnchorLink to="/#works">Works</AnchorLink>
                </div>
                <div>
                    <AnchorLink to="/#contactform">Contacts</AnchorLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
