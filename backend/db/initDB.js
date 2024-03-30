// generate fake data into database(used to create the database) - will be deleted in the future
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import faker from 'faker';

dotenv.config({ path:'../../.env' });

const uri = process.env.mongo_database;
const dbName = 'QueensCricketDatabase';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const generateFakeMatch = () => {
    const teams = ['Team A', 'Team B'].map(teamName => {
      const players = Array.from({ length: 11 }, () => ({
        name: faker.name.findName(),
        role: faker.random.arrayElement(['Batsman', 'Bowler', 'All-rounder', 'Wicket-keeper']),
        battingStats: {
          runs: faker.datatype.number({ min: 0, max: 150 }),
          balls: faker.datatype.number({ min: 0, max: 150 }),
          fours: faker.datatype.number({ min: 0, max: 20 }),
          sixes: faker.datatype.number({ min: 0, max: 10 }),
          strikeRate: faker.datatype.float({ min: 50, max: 200 }).toFixed(2),
          howOut: faker.random.arrayElement(['bowled', 'caught', 'run out', 'lbw', 'not out']),
        },
        bowlingStats: {
          overs: faker.datatype.number({ min: 0, max: 10 }),
          maidens: faker.datatype.number({ min: 0, max: 5 }),
          runsConceded: faker.datatype.number({ min: 0, max: 100 }),
          wickets: faker.datatype.number({ min: 0, max: 5 }),
          economyRate: faker.datatype.float({ min: 0, max: 10 }).toFixed(2),
        },
      }));
  
      const innings = {
        totalRuns: faker.datatype.number({ min: 100, max: 500 }),
        totalWickets: faker.datatype.number({ min: 0, max: 10 }),
        totalOvers: faker.datatype.number({ min: 20, max: 50 }),
        extras: {
          byes: faker.datatype.number({ min: 0, max: 20 }),
          legByes: faker.datatype.number({ min: 0, max: 20 }),
          wides: faker.datatype.number({ min: 0, max: 20 }),
          noBalls: faker.datatype.number({ min: 0, max: 20 }),
        },
      };
  
      const fallOfWickets = Array.from({ length: innings.totalWickets }, (_, index) => ({
        wicketNumber: index + 1,
        scoreAtWicket: faker.datatype.number({ min: 0, max: innings.totalRuns }),
        over: faker.datatype.number({ min: 0, max: innings.totalOvers }),
        playerOut: players[faker.datatype.number({ min: 0, max: 10 })].name,
      }));
  
      return {
        name: teamName,
        players,
        innings,
        fallOfWickets,
      };
    });
  
    const match = {
      date: faker.date.past(),
      location: faker.address.city(),
      teams,
      result: faker.random.arrayElement(['Team A wins', 'Team B wins', 'Draw']),
    };
  
    return match;
  };
  
  async function insertFakeMatch() {
    try {
      await client.connect();
      const database = client.db(dbName);
      const matches = database.collection('matches');
  
      const fakeMatch = generateFakeMatch();
      const result = await matches.insertOne(fakeMatch);
      console.log('Fake match inserted with id:', result.insertedId);
    } catch (error) {
      console.error('Error inserting fake match:', error);
    } finally {
      await client.close();
    }
  }
  
  insertFakeMatch().catch(console.error);
