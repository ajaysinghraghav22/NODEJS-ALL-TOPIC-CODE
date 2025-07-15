const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'e-comm';
const client = new MongoClient(url); // Corrected the typo "clinet" to "client"

async function dbconnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('product');
}
module.exports=dbconnect;