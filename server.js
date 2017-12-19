const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3001;

let todos = [
  {
    id: 1,
    title: "first todo"
  },
  {
    id: 2,
    title: "another todo"
  }
]

mongoose.connect('mongodb://test:123@ds135956.mlab.com:35956/learning-mern', {
  useMongoClient: true
});
var db = mongoose.connection;

// mongo connection check
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB.")
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  res.json(todos);
});

app.listen(port, () => {
  console.log("Server running on port " + port);
})
