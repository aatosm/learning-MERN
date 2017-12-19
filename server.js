const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
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
