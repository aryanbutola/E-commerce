const mongodb = require('mongodb');
const uri = "mongodb+srv://dhruvjain657:0mEYWs2iuxrSCpim@cluster0.bfryinm.mongodb.net/test?retryWrites=true&w=majority";

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
    const client = new MongoClient(uri);

    try{
        await client.connect();
        database = await client.db('online-shop');

        // await  listDatabases(client);

    } catch (err) {
        console.log(err);
    } finally {
        // await client.close();
    }
}

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

function getDb() {
    if(!database) 
    {
        throw new Error('You must connect first!');
    }
    // const products = database.collection('products');

    return database;
}

module.exports = {
    connectToDatabase: connectToDatabase,
    getDb: getDb
}