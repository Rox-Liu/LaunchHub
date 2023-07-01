import React, { useState, useEffect } from 'react';
import './Landing.css'

// Landing page
const Landing = () => {
    const [ winWidth, setWinWidth ] = useState(0);

    useEffect( () => {
        if (typeof window !== 'undefined') {
            setWinWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            };
        };
    }, []);
    
    const handleResize = () => {
        setWinWidth(window.innerWidth);
    };


    
    return (
        <>
            <div id="landing-container">
                <h1>We work with start-ups to deliver social impact, scale & reach their audience.</h1>
                <button>Work With Us</button>
                { winWidth > 1500 && 
                    <svg id="landing-arrow" width="56" height="111" viewBox="0 0 56 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M48.4235 36.2829C46.2307 23.7822 42.1529 11.8757 34.0649 5.5986C27.5203 0.519233 20.5599 0.110716 14.453 0.979924C10.1358 1.59441 5.8417 2.85118 1.96754 5.01984C0.183381 6.01863 -0.178448 10.5378 2.40043 9.09424C11.8958 3.77876 28.9211 -0.112262 38.7152 18.5629C47.4975 35.3089 47.6575 60.754 45.8392 76.8527C45.0657 83.701 43.8506 90.5019 42.0598 96.6C41.606 92.0373 41.1523 87.4747 40.6986 82.912C40.3315 79.2209 35.9326 77.3595 36.3638 81.6953C37.1963 90.0672 38.0288 98.4392 38.8614 106.811C39.092 109.131 41.5328 111.344 42.5946 110.458C46.636 107.086 50.6775 103.714 54.7189 100.342C56.8126 98.5948 53.3774 92.7703 51.5872 94.2641C49.3161 96.1591 47.0451 98.054 44.7741 99.949C50.805 82.7686 52.3778 58.8261 48.4235 36.2829Z" fill="#EAE4DA"/>
                    </svg>
                }
            </div>
        </>

    )
}

export default Landing;