import React from 'react';
import Navbar from '../components/Layouts/Navbar';
import Team from '../components/AboutUs/Team';
import Values from '../components/AboutUs/Values';
import ContactForm from '../components/HomePage/ContactForm'
import Footer from '../components/Layouts/Footer'
import '../styles/about.css';

const AboutPage = () => {
    return (
        <>  
            <Navbar />
            <div>
                <Team />
                <Values />
                <ContactForm />
                <Footer />
            </div>
        </>
    )
}

export default AboutPage;