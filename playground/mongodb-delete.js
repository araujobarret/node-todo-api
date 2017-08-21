// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err)
		return console.log('Error: ', err);
	console.log('Connected to MongoDB server');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Something to do'}).then((res) => {
	// 	console.log(res);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((res) => {
	// 	console.log(res);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
	// 	console.log(res);
	// });

	// db.collection('Users').deleteMany({name: 'Daniel'}).then((res) => {
	// 	console.log(res);
	// });

	// db.collection('Users').findOneAndDelete({name: 'Carlos'}).then((res) => {
	// 	console.log(res);
	// });

	db.close();
});