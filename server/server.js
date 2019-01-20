const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
let {authenticate} = require('./middleware/authenticate');

let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Expose-Headers', 'Authorization');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, x-auth');
  next();
});

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});

});

app.get('/todos', (req, res) => {
	Todo.find().then((doc) => {
		res.send({todos: doc});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((doc) => {
		res.send({todos: doc});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	let id = req.params.id;
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}

	Todo.findById(id).then((todo) => {
		if(!todo)
			return res.status(404).send();

		res.send({todo});
	}).catch((e) => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
	let id = req.params.id;
	if(!ObjectID.isValid(id))
		return res.status(404).send();

	Todo.findByIdAndRemove(id).then((todo) => {
		if(!todo)
			return res.status(404).send();
		res.send({todo})
	}).catch((e) => res.status(400).send());
});

app.patch('/todos/:id', (req, res) => {
	let id = req.params.id;
	let body = _.pick(req.body, ['text', 'completed']);

	if(!ObjectID.isValid(id))
		return res.status(404).send();

	console.log('completed', body.completed);
	if(_.isBoolean(body.completed) && body.completed) {
		body.completedAt = new Date().getTime();
	}
	else {
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {new: true})
		.then((todo) => {
			if(!todo)
				return res.send();

			res.status(400).send({todo})
	}).catch((e) => res.status(400));
});

app.post('/users', (req, res) => {
	let body = _.pick(req.body, ['email', 'password']);
	let user = new User(body);

	user.save().then(() => {
		return user.generateAuthToken();		
	}).then((token) => {
		res.header('x-auth', token).send(user);
	}).catch((e) => {
		res.status(400).send(e);
	});
});

app.get('/users/me', authenticate, (req, res) => {
	res.send(req.user);
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = {app};
