const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url); // Corrected the typo "clinet" to "client"

async function getdata() {
    try {
       let result = await client.connect(); // Connect to the MongoDB server
        console.log("Connected to MongoDB");

        const db = client.db(database); // Get the specific database
        const collection = db.collection('product'); // Get the specific collection
        const res = await collection.find({}).toArray(); // Fetch all documents in the collection
        console.log(res);
    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data:", error);
    } finally {
        await client.close(); // Ensure the client connection is closed after execution
    }
}

getdata();
