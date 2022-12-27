const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// Variables de Entorno
require("dotenv").config({ path: "././.env" });
// Query Neon BBDD - sql`Select * from .....`
// const {sql} = require ('./DB/dbConnect.js')

// API
// Spirits
const { GetAllSpiritNames } = require("./API/Spirits/getAllSpirits");

console.log("Connection Back: OK");

// Tests Vercel
app.use(express.static('public'))

app.get('/', (req, res) => {
	// res.sendFile('index.html', {root: path.join(__dirname, 'public')})
	res.send('Hello World!');
})

// Rutas
app.get("/spirits", async (req, res) => {
	const allSpiritsNames = await GetAllSpiritNames();

	res.send(allSpiritsNames);
	res.end;
});

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

app.listen(PORT, () => {
	console.log(`Servidor disponible en http://localhost:${PORT}`);
});

module.exports = app
