const { sql } = require("../../../DB/dbConnect");

const GetUserLogIn = async (email, password) => {
	try {
		const user = await sql`
            SELECT * 
            FROM users
            WHERE email = ${email}
            AND password = ${password};
        `;

		if (user.count > 0) {
			const validUser = {
				user: user[0].name,
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
