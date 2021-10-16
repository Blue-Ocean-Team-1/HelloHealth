const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const config = require('./config/config.js');

const server = express();
const PORT = config.PORT || 6000;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
};

server.use(cors(corsOptions));
// app.use(express.static(path.join(__dirname, 'dist', 'client')));

server.get('/hello', (req, res) => {
  res.status(200).send('hello');
});

if (config.NODE_ENV !== 'test') {
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports.server = server;
