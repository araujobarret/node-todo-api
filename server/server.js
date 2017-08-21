let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/27017/TodoApp');

let Todo = mongoose.model('Todo', {
	text: {
		type: String,

	}, 
	completed: {
		type: Boolean
	},
	completedAd: {
		type: Number
	}
});

// save new thing
let newTodo = new Todo({
	text: 'Cook dinner'
});
