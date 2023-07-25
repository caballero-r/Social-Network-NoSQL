// Import require libraries
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// Express middleware
const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Established connection
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});