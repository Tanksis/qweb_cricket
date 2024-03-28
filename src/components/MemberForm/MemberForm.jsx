// captures user input through controlled form elements, managing state with React hooks and handling form submission
import axios from 'axios';
import './MemberForm.css';
import React, { useState } from 'react';

function MemberForm() {

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        uniName: '',
        studentNum: '',
        email: '',
    });

    const [result, setResult] = useState(null);

    const resetForm = () => {
        setFormState({
            firstName: '',
            lastName: '',
            uniName: '',
            studentNum: '',
            email: '',
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
        <div className="member-form">
            <form onSubmit={sendEmail}>
                <div className='member-header'><h3>Become a Member - Register here</h3></div>
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
                <label>University or College name</label>
                <input type="text" name="uniName" required onChange={handleInputChange} />
                <label>Student ID (If applicable)</label>
                <input type="text" name="studentNum" required onChange={handleInputChange} />
                <label>Email (required)</label>
                <input type="email" name="email" required onChange={handleInputChange} />
                {result && (
                    <p className={`${result.success ? 'success' : 'error'}`}>
                        {result.message}
                    </p>
                )}
                <button type="submit">Register</button>
            </form>

        </div>
    );
}

export default MemberForm;