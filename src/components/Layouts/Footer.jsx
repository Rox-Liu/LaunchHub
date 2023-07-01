import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <img src="http://placekitten.com/100/50" alt="Logo" />
            </div>

            <div>
                <h3>Studio 1</h3>
                <p>address address</p>
                <p>address address</p>
            </div>

            <div>
                <h3>Contact</h3>
                <p>Number</p>
                <p>email</p>
            </div>

            <div>
                <h3>Social</h3>
                <div>
                    <a href="#">Instagram</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </footer>
    )

}

export default Footer;