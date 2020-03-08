var Mongoose = require('mongoose');

// load database
//Mongoose.connect('mongodb://localhost:27017/recipe-manager');
console.info('Connecting to mongodb on url=' + process.env.MONGODB_URL);
Mongoose.connect('mongodb+srv://oas-manager-server:K0Yq5VEpZpVdzZMN@recipe-manager-5b3y2.gcp.mongodb.net/test?retryWrites=true&w=majority');

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
	console.log('Connection with database succeeded.');
});

exports.db = db;
