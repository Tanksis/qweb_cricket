//create transporter for sending mail
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config({ path:'../.env' });
console.log(process.env.email); // Should output the email if correctly loaded(for testing)
console.log(process.env.password); // Should output the password if correctly loaded(for testing) 

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'login',
        user: process.env.email,
        pass: process.env.password
    }
});

export { transporter }; 