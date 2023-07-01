import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div id="services-container">
            <div className="services-blurb">
                <h1>What We Do</h1>
                <p>We help you plan, create, maintain and drive your website.</p>
                <p>With our expertise in UX design and software engineering, we help socially-driven startups drive social change and make a meaningful impact online.</p>
            </div>
            
            <div className="services-list">
                <h2>User-Centered Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <h2>Website Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <h2>Front- & Back-End Development</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <h2>Optimisation</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    )
}

export default Services;