// Importing Mongoose
const { connect, connection } = require('mongoose');

// Connecting to Database
connect('mongodb://127.0.0.1:27017/socialnetworkdb');

module.exports = connection;
