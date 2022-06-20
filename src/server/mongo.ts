import { MongoClient, MongoClientOptions } from 'mongodb';
import 'dotenv/config';

const client = new MongoClient(process.env.MONGODB || 'mongodb://localhost', { useUnifiedTopology: true } as MongoClientOptions);

export default client;