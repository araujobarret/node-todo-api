// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, dbobject) => {
	if(err)
		console.log('Error: ', err);
	// else {
	// 	dbobject.collection('Users').insertOne({
	// 		name: 'Eduardo',
	// 		age: 15,
	// 		location: 'Caraguatatuba, São Paulo'
	// 	}, (err, res) => {
	// 		if(err)
	// 			return console.log('Unable to insert user');
	// 		else
	// 			console.log(res.ops[0]._id.getTimestamp()); 
	// 	});
	// }
	// 	dbobject.collection('Todos').insertOne({
	// 		text: "Something to do",
	// 		completed: false
	// 	}, (err, res) => {
	// 		if(err)
	// 			return console.log('Unable to insert todo', err);			
	// 		console.log(JSON.stringify(res.ops, undefined, 2)); 
	// 	});
	// 	console.log('Connected to mongdb');
	// }	


	dbobject.close();
});