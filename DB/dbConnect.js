const postgres = require('postgres');
require("dotenv").config({ path: "./../.env" });


const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`;

 const sql = postgres(URL, { ssl: 'require', max: 100, idle_timeout: 10,});


// const GetUsers = async(req, res) => {
// 	try{
// 		const users = await sql`SELECT * FROM users`
// 		console.log(users)
// 		return users;
// 	}catch(error){
// 		console.log(error)
// 	}
// }

// GetUsers()

module.exports = {sql}