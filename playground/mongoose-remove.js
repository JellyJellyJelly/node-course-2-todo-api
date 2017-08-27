const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findByIdAndRemove('59a21613e515cfa5febae27c').then((todo) => {
// 	console.log(todo);
// });

Todo.findOneAndRemove({_id: '59a21613e515cfa5febae27c'}).then((todo) => {

}) 