import React from 'react';
import Team from '../components/AboutUs/Team';
import Navbar from '../components/Layouts/Navbar';
import '../styles/about.css';

const AboutPage = () => {
    return (
        <>  
            <Navbar />
            <div>
                <Team />
            </div>
        </>
    )
}

export default AboutPage;