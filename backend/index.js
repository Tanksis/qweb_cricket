
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import {transporter}from './config.js';


const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', (req, res) => {

    const { firstName, lastName, email, message } = req.body;
    const content = `name: ${firstName} ${lastName} \n email: ${email} \n message: ${message} `;

    const mail = {
        from: req.body.email, 
        to: process.env.email, 
        subject: 'New Message from Contact Form',
        text: content
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({ status: 'fail' });
        } else {
            res.json({ status: 'success' });
        }
    });
});


transporter.verify((error, success) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

app.listen(3002, () => {
    console.log(`Server running on port 3002`)
});