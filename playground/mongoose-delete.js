const {ObjectID} = require('mongodb');
let {mongoose} 	= require('./../server/db/mongoose');
let {Todo} 		= require('./../server/models/todo');
let {User} 		= require('./../server/models/user')

// Todo.remove({})

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

Todo.findByIdAndRemove('599c54911c5fdf4d13ba3a34').then((todo) => {
	console.log(todo);
}).catch((e) => console.log(e));

Todo.find().then((doc) => console.log(doc));
