// configurate database 
// test to see if MongoDB work
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

// Initialize dotenv
dotenv.config({ path:'../../.env' });

// MongoDB URI and database name
const uri = process.env.mongo_database;
const dbName = 'QueensCricketDatabase';

// Create a new MongoClient
const client = new MongoClient(uri);


async function printMatches() {
    try {
      // Connect to the MongoDB cluster
      await client.connect();
      console.log('Connected to MongoDB');
  
      // Get the database
      const database = client.db(dbName);
      console.log(`Database: ${dbName}`);
      
      // Get the matches collection
      const matches = database.collection('matches');
      
      // Find all documents in the collection and convert to an array
      const matchDocuments = await matches.find().toArray();
      
      if (matchDocuments.length === 0) {
        console.log('No documents found in matches collection.');
      } else {
        console.log("Matches collection data:");
        matchDocuments.forEach((doc, index) => {
          console.log(`Match ${index + 1}:`, doc);
        });
      }
      
    } catch (e) {
      console.error("Error fetching matches:", e);
    } finally {
      // Close the connection to the database
      await client.close();
    }
  }
  
  printMatches().catch(console.error);
  