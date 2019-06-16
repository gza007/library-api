const express = require('express');

// const artistRouter = require('./routes/artists');

const app = express();

app.use(express.json());
app.post('/', (req, res) => {
  req.status(200);
});

// app.use('/');


module.exports = app;
