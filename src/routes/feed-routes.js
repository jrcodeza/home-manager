const Feed = require('../model/feed');

module.exports = [
	{
		method: "POST",
		path: "/users/{userId}/feeds",
		handler: (request, h) => {
			let inputRecipe = request.payload;
			inputRecipe.userId = request.params.userId;
			const feedDocument = new Feed(inputRecipe);
			return Feed.create(feedDocument).then((createdFeed) => {
				console.info("Recipe inserted successfully with id " + createdFeed._id);
				return createdFeed;
			}).catch((err) => {
				console.error(err);
				return null;
			});
		}
	},
	{
		method: "GET",
		path: "/users/{userId}/feeds",
		options: {
			validate: {}
		},
		handler: async (request, h) => {
			let filter = {};
			if (request.params.userId) {
				filter.userId = request.params.userId;
			}
			return Feed.find(filter).sort('-date');
		}
	}
];
