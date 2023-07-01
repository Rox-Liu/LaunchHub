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
                <h2>Lets Chat!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, accusamus inventore at voluptatibus consequatur asperiores nihil vero ab voluptates? Animi ipsam aliquid cupiditate iste laborum repellendus est sapiente voluptatibus atque.</p>
            </div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="firstName">Your first name</label>
                <input type="text" name="firstName" id="firstName" placeholder="Frank" required />

                <label htmlFor="lastName">Your last name</label>
                <input type="text" name="lastName" id="lastName" placeholder="Ocean" required />

                <label htmlFor="email">Your email</label>
                <input id="email" type="email" name="email" placeholder="frank@gmail.com" required/>

                <label htmlFor="company">Your organisation</label>
                <input type="text" name="company" id="company" />

                <label htmlFor="message">Write a message</label>
                <textarea id="message" name="message" placeholder="Say hello :)" required />
                
                <button type="submit" disabled={state.submitting}>
                    Submit Enquiry!
                </button>
                <ValidationError errors={state.errors} />   
            </form>

        </div>
    )
}

export default ContactForm;