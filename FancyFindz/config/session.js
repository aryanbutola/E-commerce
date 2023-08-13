const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

function createSessionStore()
{
    const MongoDBStore = mongoDbStore(expressSession);

    const store = new MongoDBStore({
        uri: 'mongodb+srv://dhruvjain657:0mEYWs2iuxrSCpim@cluster0.bfryinm.mongodb.net/test?retryWrites=true&w=majority',
        databaseName: 'online-shop',
        collection: 'sessions'
    });

    return store;
}

function createSessionConfig() {
    return {
        secret: 'super-secret',
        resave: false,
        saveUninitialized: false,
        store: createSessionStore(),
        cookie: {
            maxAge: 2 * 24 * 60 * 60 * 1000
        }
    };
}

module.exports = createSessionConfig;