const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const server = express();
server.use(cors());

// check server connection
server.use('/hello', (req, res) => {
  res.status(200).send('Hello to you too.');
});

module.exports = server;
