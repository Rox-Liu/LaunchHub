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

            <div>
                <p>
                    We pay our respects to the traditional custodians of the lands on which we live and work, and to the traditional custodians of the lands and waters which we may visit upon in our work. We acknowledge their elders past and present. Indigenous sovereignty has never been ceded. It always was, and always will be Aboriginal land.
                </p>
            </div>
        </footer>
    )

}

export default Footer;