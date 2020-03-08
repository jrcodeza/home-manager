const Hapi = require('@hapi/hapi');
const db = require('./database').db;
const feedRoutes = require('./routes/feed-routes');

const init = async () => {

	const server = initializeServer(process.env.APP_PORT, process.env.APP_ADDRESS);
	server.route(feedRoutes);

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

function initializeServer(port = 8181, address = '0.0.0.0') {
	return Hapi.server({
		port: port,
		host: address,
		routes: { cors: {origin: ['*']} }
	});
}

process.on('unhandledRejection', (err) => {
	console.log(err);
	process.exit(1);
});

init();
