const dbconnect =require('./mongoDB')
// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const database = 'e-comm';
// const client = new MongoClient(url); // Corrected the typo "clinet" to "client"

// async function dbconnect() {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('product');
    // let data = await collection.find({name :'chasma'}).toArray();
    // console.log(data); ab hum esko alag file mai kringe for increase resulability
    
    //*** this code for database connection */
   
//}

//using this in another file

// console.log(dbconnect()) ye humko promise return krega.so hum promise ko handle kringe by using then keyword
// dbconnect().then((res)=>{
//     res.find({}).toArray().then((data)=>{
//         console.warn(data);     ------>> *** method one to handle promises
// });
// })
write a programm to search for a pattern in a string using the kmp alogorithm
const  main = async() => {
let data = await dbconnect();
data =await data.find({name :'chasma'}).toArray();
console.warn(data);

}
main();



