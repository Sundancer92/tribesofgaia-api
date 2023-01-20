const { sql } = require("../../../DB/dbConnect");

const GetSpiritsData = async (req, res) => {
	try {
		const spiritsNames = await sql`
            SELECT *
            FROM spirits;
        `;
		console.log(spiritsNames);
		return spiritsNames;
	} catch (err) {
		console.log("Error en GetSpiritsData");
		console.log(err);
	}
};

module.exports = { GetSpiritsData };
