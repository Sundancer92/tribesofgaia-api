const { sql } = require("../../../DB/dbConnect");
const { tokenSign } = require("./../../helpers/userAuth");

const GetUserLogIn = async (username, password) => {
	try {
		const user = await sql`
            SELECT * 
            FROM users
            WHERE name = ${username}
            AND password = ${password};
        `;

		if (user.count > 0) {
			const token = tokenSign(user[0]);
			const validUser = {
				user: user[0].name,
				token: token,
			};
			return validUser;
		} else {
			return "Invalid User";
		}
	} catch (error) {
		console.log("Error en GetUserLogIn");
		console.error(error);
	}
};

module.exports = { GetUserLogIn };
