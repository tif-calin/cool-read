// const JSONdb = require('simple-json-db');

// const db = new JSONdb('./db.json', {
//   jsonSpaces: 2
// });

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
