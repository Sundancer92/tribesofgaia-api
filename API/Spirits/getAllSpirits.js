const { sql } = require("../../DB/dbConnect");

const GetAllSpiritNames = async (req, res) => {
	try {
		const spiritsNames = await sql`
            SELECT name_1
            FROM spirits;
        `;
		console.log(spiritsNames);
		return spiritsNames;
	} catch (err) {
		console.log("Error en GetAllSpiritNames");
		console.log(err);
	}
};

module.exports = { GetAllSpiritNames };
