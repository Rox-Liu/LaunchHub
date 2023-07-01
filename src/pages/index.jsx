import * as React from "react";
import '../styles/index.css'
import ContactForm from "../components/HomePage/ContactForm";
import Services from "../components/HomePage/Services";
import Landing from "../components/HomePage/Landing";
import Work from "../components/HomePage/Works";
import Footer from "../components/Layouts/Footer";
import Navbar from "../components/NavBar";

const IndexPage = () => {
	return (
		<>
			<Navbar />
			<div>
				<Landing />
				<Services />
				<Work />
				<ContactForm />
				<Footer />
			</div>
		</>
	);
};

export const Head = () => <title>LaunchHub</title>;

export default IndexPage;