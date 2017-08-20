// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err)
		return console.log('Error: ', err);
	console.log('Connected to MongoDb server');

	// db.collection('Todos').find({
	// 	_id: new ObjectID("59990142ea81b70fd868f812")
	// }).toArray().then((documents) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(documents, undefined, 2));
	// }, (err) => console.log(err));

	// db.collection('Todos').find().count().then((count) => {
	// 	console.log(`Count: ${count}`);
	// }, (err) => console.log(err));

	db.collection('Users').find({name: 'Carlos'}).toArray().then((documents) => {
		console.log('Users with name Carlos');
		console.log(JSON.stringify(documents, undefined, 2));
	}, (err) => console.log(err));

	db.close();
});