// Imports required
const connection = require('../config/connection');
const Users = require('../models/users');
const Thoughts = require('../models/thoughts');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Example data for our users
    const exampleUsers = [
        {
            username: "John",
            email: "john@helloworld.com",
            thoughts: [],
            friends: [],
        },
        {
            username: "Smith",
            email: "smith@helloworld.com",
            thoughts: [],
            friends: [],
        },
        {
            username: "Jane",
            email: "jane@helloworld.com",
            thoughts: [],
            friends: [],
        },
        {
            username: "Doe",
            email: "doe@helloworld.com",
            thoughts: [],
            friends: [],
        },
    ]

    Users.insertMany(exampleUsers)
    .then((results) => {
        console.log('The following user data has been added to the database:', results);
    })
    .catch((error) => {
        console.log('An error has occurred:', error);
    });

    console.log('All example data has been added to database');
    process.exit
})


