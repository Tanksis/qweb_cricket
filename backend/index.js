// Main server file
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import email from './routes/email.js';
import { transporter } from './config.js';

dotenv.config({ path: '../.env' });

const app = express();
app.use(cors());
app.use(express.json());

// Use email routes with the '/send' endpoint
app.use('/send', email);

// MongoDB URI and database name
const uri = process.env.mongo_database;
const dbName = 'QueensCricketDatabase';

// Create a new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Endpoint to fetch all matches
app.get('/matches', async (req, res) => {
  try {
    await client.connect();
    const matches = client.db(dbName).collection('matches');

    const allMatches = await matches.find().toArray();

    res.status(200).json(allMatches);
  } catch (e) {
    res.status(500).send(e.message);
  } finally {

    await client.close();
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.listen(3002, () => {
  console.log(`Server running on port 3002`);
});
