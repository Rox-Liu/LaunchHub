import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Team from '../components/AboutUs/Team';
import Values from '../components/AboutPage/Values';
import '../styles/about.css';

const AboutPage = () => {
    return (
        <>  
            <Navbar />
            <div>
                <Team />
      				  <Values />
            </div>
        </>
    )
}

export default AboutPage;