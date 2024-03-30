//Main server file
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import email from './routes/email.js';
import { transporter } from './config.js';

dotenv.config({ path:'../.env' }); // really important to specify the path or else it just doesn't work

const app = express();
app.use(cors());
app.use(express.json());

// Use email routes with the '/send' endpoint
app.use('/send', email);


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