import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import './ContactForm.css';

const ContactForm = () => {
    const [ state, handleSubmit ] = useForm("abcd"); // use real form ID

    // state.succeeded
    if ( state.succeeded ) {
        return (
            <div>
                <p>Thanks for reaching out!</p>
            </div>
        )            
    }

    return (
        <div id="contact-container">
            <div className="contact-blurb">
                <h1>Lets Chat!</h1>
                <p>Need help with your project? Give us a call or fill in the contact form below and we'll make a time to chat.</p>
            </div>
            <form onSubmit={ handleSubmit }>
                <div className="inputs-container">
                    <div className="form-inputs">
                        <label htmlFor="full-name">Your name</label>
                        <input type="text" name="full-name" id="full-name" placeholder="Frank" required />

                        <label htmlFor="email">Your email</label>
                        <input id="email" type="email" name="email" placeholder="frank@gmail.com" required/>

                        <label htmlFor="company">Your organisation</label>
                        <input type="text" name="company" id="company" />
                    </div>

                    <div className="form-text">
                        <label htmlFor="message">Write a message</label>
                        <textarea id="message" name="message" placeholder="Say hello :)" required />
                    </div>
                </div>
                
                <button type="submit" disabled={state.submitting}>
                    Submit Enquiry!
                </button>
            </form>
            <ValidationError errors={state.errors} /> 

        </div>
    )
}

export default ContactForm;