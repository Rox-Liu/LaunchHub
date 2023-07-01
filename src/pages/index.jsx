import * as React from "react";
import '../styles/index.css'
import ContactForm from "../components/HomePage/ContactForm";
import Services from "../components/HomePage/Services";
import Landing from "../components/HomePage/Landing";
import Work from "../components/HomePage/Works";
import Footer from "../components/Footer";

const IndexPage = () => {
	return (
		<div>
			<Landing />
			<Services />
			<ContactForm />
			<Work />
			<Footer />
		</div>
	);
};

export const Head = () => <title>LaunchHub</title>;

export default IndexPage;