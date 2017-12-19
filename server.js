const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 3001;
const router = express.Router();

const Todo = require('./models/todos');

mongoose.Promise = global.Promise;
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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', (req, res, next) => {
  res.json({message: "API initialized!"});
});

router.route('/todos')
  .get(function(req, res) {
    Todo.find(function(err, todos) {
      if (err){
        res.send(err);
      }
      res.json(todos)
    });
  })
  .post(function(req, res) {
    let todo = new Todo();
    todo.task = req.body.task;
    todo.priority = req.body.priority;
    todo.completed = false;
    todo.save(function(err) {
      if (err){
        res.send(err);
      }
      res.json({ message: 'Todo successfully added!' });
    });
  });

app.use('/api', router);

app.listen(port, () => {
  console.log("Server running on port " + port);
})
