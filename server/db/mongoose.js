let mongoose = require('mongoose');

let options = {
	server: { socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}},
	replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000}}
};

// mLab connection
let todoUser = process.env.TODO_USER;
let todoPassword = process.env.TODO_PASSWORD;
let mLabUri = `mongodb://${todoUser}:${todoPassword}@ds023523.mlab.com:23523/todoapp5523`;

mongoose.set('debug', true)
mongoose.Promise = global.Promise;
mongoose.connect(mLabUri, options);
let conn = mongoose.connection;

conn.on("error", console.error.bind(console, "conection error:"));

module.exports = {
	mongoose
};
