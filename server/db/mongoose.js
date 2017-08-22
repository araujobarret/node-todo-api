let mongoose = require('mongoose');

let serverUri = "mongodb://root:killadmin@ds023523.mlab.com:23523/todoapp5523";

mongoose.Promise = global.Promise;
mongoose.connect(serverUri);
// mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
};