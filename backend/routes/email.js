// send email
import { Router } from 'express';
import { transporter } from '../config.js';
import dotenv from 'dotenv';
const router = Router();

dotenv.config({ path:'../../.env' });

router.post('/', (req, res) => {

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

export default router;