const express = require('express');
const config = require('./config/config');
const server = require('./server');

// Vite Setup Goes here ...

// server.listen(process.env.DEV_PORT, () => {
//   console.log(`Server is currently listening on http://localhost:${process.env.DEV_PORT}`);
// });

const app = express();

const PORT = config.PORT || 8000;

if (config.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports.app = app;
