const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const feedSchema = new Schema({
	userId: {
		type: String,
		required: true,
		index: true
	},
	date: {
		type: Date,
		required: true,
		index: true,
		default: Date.now()
	},
	side: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('FeedSchema', feedSchema);
