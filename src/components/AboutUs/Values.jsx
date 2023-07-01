import React from 'react';
import './Values.css';

const Values = () => {
    return (
        <>
            <div id="values-container">
                <div className="values-blurb">
                    <h1>Our Values</h1>
                </div>
                
                <div className="values-list">
                    <h2>Social Impact</h2>
                    <p>Helping start-ups build a better future and making a positive impact on society.</p>

                    <h2>Simplicity</h2>
                    <p>Delivering seamless user experiences with high-quality standards.</p>

                    <h2>Sustainability</h2>
                    <p>Balancing profitability with responsible practices and contributing to a more sustainable world.</p>
                </div>
            </div>
        </>
    )
}

export default Values;