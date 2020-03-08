var Mongoose = require('mongoose');

// load database
//Mongoose.connect('mongodb://localhost:27017/recipe-manager');
console.info('Connecting to mongodb on url=' + process.env.MONGODB_URL);
Mongoose.connect(process.env.MONGODB_URL);

var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
	console.log('Connection with database succeeded.');
});

exports.db = db;
