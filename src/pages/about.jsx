import React from 'react';
import Navbar from "../components/Layouts/Navbar";
import Values from '../components/AboutPage/Values';

const AboutPage = () => {
    return (
		<>
			<Navbar />
			<div>
				<Values />
			</div>
		</>
	);
}

export default AboutPage;