var MongoClient = require('mongodb').MongoClient;
const { exit } = require('process');
var url = 'mongodb://0.0.0.0:27017/reminders'; //protocol://hostname:port/database
MongoClient.connect(url)
    .then(() => {
        console.log("db connect success");
        exit();
    })
    .catch((err) => {
        throw err
    });