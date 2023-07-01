import * as React from "react";
import ContactForm from "../components/ContactForm";

const IndexPage = () => {
	return (
		<div>
			<h1>LaunchHub Coming Soon</h1>
			<ContactForm />
		</div>
	);
};

export const Head = () => <title>LaunchHub</title>;

export default IndexPage;