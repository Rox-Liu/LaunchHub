import React from 'react';
import { useForm, ValidationError } from "@formspree/react";

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
        <div className="contact-form">  
            <h2>Reach Out!</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="name">*Name:</label>
                <input type="text" name="name" id="name" placeholder="Frank Ocean" required />

                <label htmlFor="email">*Email:</label>
                <input id="email" type="email" name="email" placeholder="frank@gmail.com" required/>

                <label htmlFor="company">Company:</label>
                <input type="text" name="company" id="company" />

                <label htmlFor="message">*Message:</label>
                <textarea id="message" name="message" placeholder="Say hello :)" required />
                
                <button type="submit" disabled={state.submitting}>
                    Send!
                </button>
                <ValidationError errors={state.errors} />   
            </form>

        </div>
    )
}

export default ContactForm;