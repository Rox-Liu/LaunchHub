import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div id="services-container">
            <div className="services-blurb">
                <h1>We help make change happen</h1>
                <p>With our expertise in UX design and software engineering, we help socially-driven startups drive positive change and make a meaningful impact online. Discovery how we can work together today.</p>
            </div>
            
            <div className="services-list">
                <h2>Design Research</h2>
                <p>Uncover powerful insights that drive positive change</p>

                <h2>Experience Design</h2>
                <p>Craft inclusive and user centred digital experiences</p>

                <h2>Front- & Back-End Development</h2>
                <p>Create digital products to work seamlessly across all screens</p>

                <h2>Brand Strategy</h2>
                <p>Develop your brand with purpose and vision at the centre</p>
            </div>
        </div>
    )
}

export default Services;