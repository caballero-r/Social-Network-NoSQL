// // Imports required
// const connection = require('../config/connection');
// const Users = require('../models/users');
// const Thoughts = require('../models/thoughts');

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//     console.log('connected');

//     // Example data for our users
//     const exampleUsers = [
//         {
//             username: "John",
//             email: "john@helloworld.com",
//             thoughts: [],
//             friends: [],
//         },
//         {
//             username: "Smith",
//             email: "smith@helloworld.com",
//             thoughts: [],
//             friends: [],
//         },
//         {
//             username: "Jane",
//             email: "jane@helloworld.com",
//             thoughts: [],
//             friends: [],
//         },
//         {
//             username: "Doe",
//             email: "doe@helloworld.com",
//             thoughts: [],
//             friends: [],
//         },
//     ]

//     // Example data for our thoughts
//     const exampleThoughts = [
//         {
//             thoughtText: "My name is John, I like ...",
//             username: "John",
//             reactions: [],
//         },
//         {
//             thoughtText: "My name is Smith, I like ...",
//             username: "Smith",
//             reactions: [],
//         },
//         {
//             thoughtText: "My name is Jane, I like ...",
//             username: "Jane",
//             reactions: [],
//         },
//         {
//             thoughtText: "My name is Doe, I like ...",
//             username: "Doe",
//             reactions: [],
//         },
//     ]

//     Users.insertMany(exampleUsers)
//     .then((results) => {
//         console.log('The following user data has been added to the database:', results);
//     })
//     .catch((error) => {
//         console.log('An error has occurred:', error);
//     });

//     Thoughts.insertMany(exampleThoughts)
//     .then((results) => {
//         console.log('The following thoughts data has been added to the database:', results);
//     })
//     .catch((error) => {
//         console.log('An error has occurred:', error);
//     });

//     await Thoughts.collection.insertMany(exampleThoughts);
//     await Users.collection.insertMany(exampleUsers);
//     console.log('All example data has been added to database');
//     process.exit
// })


