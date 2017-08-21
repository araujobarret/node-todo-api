// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err)
		return console.log('Error: ', err);
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	text: 'Eat dinner'
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((res) => {
	// 	console.log(res);
	// });

	db.collection('Users').findOneAndUpdate({
		name: 'Daniel'
	}, {
		$set: {
			name: 'Carlos'
		},
		$inc: {
			age: 7
		}
	}, {
		returnOriginal: false
	}).then((res) => console.log(res)
	, (err) => console.log(err));

	db.close();
});