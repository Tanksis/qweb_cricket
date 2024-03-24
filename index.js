// this remain unused, I got too lazy so I use emailjs api instead.

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

// Email configuration
const transport = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'lol16112004@gmail.com',
        pass: 'minecraftcreative'
    }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Server is ready to take messages');
    }
});

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    const content = `name: ${firstName} ${lastName} \n email: ${email} \n message: ${message} `;

    const mail = {
        from: 'lol16112004@gmail.com', // Sender email address
        to: email, // Recipient email address
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

app.listen(3002, () => console.log(`Server running on port 3002`));
