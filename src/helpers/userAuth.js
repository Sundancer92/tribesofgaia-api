const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "././.env" });

const tokenSign = (user, res) => {
	if (user != 'Error') {
		const token = jwt.sign(user, process.env.PRIVATE_KEY);
		return token;
	}
};

const isTokenValid = (token) => {
	let key = token;
	const validated = jwt.verify(key, process.env.PRIVATE_KEY);

	return validated;
};

module.exports = { tokenSign, isTokenValid };
