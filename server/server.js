let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// let Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		minlenght: 1
// 	}, 
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: false
// 	}
// });

// //save new thing
// let newTodo = new Todo({
// 	text: 'Eat dinner'
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => console.log('Unable to save todo', e));                      

// let newTodo = new Todo({
// 	text: 'Cook lunch',
// 	completed: true,
// 	completedAt: 2017
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo', doc);
// }, (e) => console.log('Unable to save todo'));                      

let User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlenght: 1
	}
});

let user = new User({
	email: 'test@mail.com    '
});

user.save().then((doc) => console.log('Saved user', doc),
	(e) => console.log(e));