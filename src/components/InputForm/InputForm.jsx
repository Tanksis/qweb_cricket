// captures user input through controlled form elements, managing state with React hooks and handling form submission
import axios from 'axios';
import './InputForm.css';
import React, { useState } from 'react';

function InputForm() {

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [result, setResult] = useState(null);

    const resetForm = () => {
        setFormState({
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        });
    };


    const sendEmail = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3002/send', { ...formState })
            .then((response) => {
                if (response.data.status === 'success') {
                    setResult({
                        success: true,
                        message: 'Your message has been sent!'
                    });
                } else {
                    setResult({
                        success: false,
                        message: 'Something went wrong.'
                    });
                }
                resetForm();
            })
            .catch(() => {
                setResult({
                    success: false,
                    message: 'Something went wrong.'
                });
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    };



    return (
        <div className="contact-form">
            <form onSubmit={sendEmail}>
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
                {result && (
                    <p className={`${result.success ? 'success' : 'error'}`}>
                        {result.message}
                    </p>
                )}
                <button type="submit">Send</button>
            </form>

        </div>
    );
}

export default InputForm;