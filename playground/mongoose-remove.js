const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => console.log(result));

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5a5c473d304b4304c09b418d').then((todo) => console.log(todo));

// Todo.findOneAndRemove({ _id: '5a5c473d304b4304c09b418d' }).then((todo) => console.log(todo));


