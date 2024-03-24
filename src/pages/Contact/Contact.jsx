import './Contact.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputForm from '../../components/InputForm/InputForm';

function Contact(){
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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the submission, e.g., using fetch() to POST to a backend
        console.log(formState);
    };
    
    return (
    <div className="contact-page-container">
        <div className="contact-page-left">
            <div className="contact-header">CONTACT US</div>
            <div className="team-exec-container">
                <div>
                    <div className="team-exec-name">EXEC</div>
                    <div className="team-exec-box"></div>
                    <btn className="team-exec-text">CONTACT</btn>
                </div>
                <div>
                    <div className="team-exec-name">EXEC</div>
                    <div className="team-exec-box"></div>
                    <btn className="team-exec-text">CONTACT</btn>
                </div>
                <div>
                    <div className="team-exec-name">EXEC</div>
                    <div className="team-exec-box"></div>
                    <btn className="team-exec-text">CONTACT</btn>
                </div>
            </div>
            <div className="location-and-button">
            <div className="location">
                **Location**<br/>
                Queen's University<br/>
                Kingston, ON<br/>
                K7L 3N6
            </div>
            <Link to="/involved">
                <button className="learn-more-btn">Learn More</button>
            </Link>
            </div>
        </div>
        <InputForm/>
        </div>
    );
}



export default Contact;