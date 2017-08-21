const {ObjectID} = require('mongodb');
let {mongoose} 	= require('./../server/db/mongoose');
let {Todo} 		= require('./../server/models/Todo');
let {User} 		= require('./../server/models/User');

let id = "599b6ae3cd04130840d156f4";


if(!ObjectID.isValid(id))
	console.log('Invalid id');
else{
	User.findById(id).then((doc) => {
		if(doc)
			console.log(JSON.stringify(doc, undefined, 2));
		else
			console.log('Unable to find the user');
	}).catch((e) => console.log(e));
}


// if(!ObjectID.isValid(id))
// 	console.log('Invalid id');
// else{
// 	Todo.findById(id).then((doc) =>{
// 	if(doc)
// 		console.log('Todo by id: ', doc);
// 	else
// 		console.log('Id not found');
// 	}).catch((e) => console.log('ERROR: ', e));
// }


// Todo.find({
// 	_id: id
// }).then((doc) => console.log('Todos', doc));

// Todo.findOne({
// 	_id: id
// }).then((doc) => console.log('Todo', doc));	

