let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const TodoSchema = new Schema({
  //_id: ObjectIdSchema
  task: String,
  priority: String,
  completed: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
