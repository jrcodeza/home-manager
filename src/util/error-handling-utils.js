function getDetail(detail) {
	return {
		path: detail.path.join('/'),
		message: detail.message
	};
}

function handleError(request, h, err) {
	if (err.isJoi && Array.isArray(err.details) && err.details.length > 0) {
		const errResponse = err.details.map(detail => getDetail(detail));
		return h.response(errResponse).code(400).takeover();
	}

	return h.response(err).takeover()
}

module.exports.handleError = handleError;
