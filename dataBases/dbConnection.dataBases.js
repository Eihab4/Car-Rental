import { MongoClient } from 'mongodb';
// or as an es module:

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name



client.connect().then(() => {
    
    console.log('Connected successfully to server');
}).catch(() => {
    console.log("error detected");
})
export const db=client.db("assignment6")


