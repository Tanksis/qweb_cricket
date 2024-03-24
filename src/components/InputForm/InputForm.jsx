// captures user input through controlled form elements, managing state with React hooks and handling form submission
import emailjs from 'emailjs-com';
import './InputForm.css';
import React, { useState } from 'react';

function InputForm() {

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };
    
    const resetForm = () => {
        setFormState({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_8x8zhy8', 'template_otjqla5', formState, 'LSrSuqMBWZVfXNsNx')
            .then((result) => {
                console.log(result.text);
                alert("Message Sent, We will get back to you shortly", result.text);
                resetForm();
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, Please try again", error.text);
        });
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <label>Name (required)</label>
                <div className="name-inputs">
                    <div className="first-name">
                        <label>First Name (required)</label>
                        <input type="text" name="firstName" required onChange={handleInputChange} />
                    </div>
                    <div className="last-name">
                        <label>Last Name (required)</label>
                        <input type="text" name="lastName" required onChange={handleInputChange} />
                    </div>
                </div>
                <label>Email (required)</label>
                <input type="email" name="email" required onChange={handleInputChange} />
                <label>Message (required)</label>
                <textarea name="message" required onChange={handleInputChange}></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default InputForm;