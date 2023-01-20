const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
// Variables de Entorno
require("dotenv").config({ path: "././.env" });
// Query Neon BBDD - sql`Select * from .....`
// const {sql} = require ('./DB/dbConnect.js')

// Editar a la direccion de tribesofgaia-frontend en produccion
app.use(
	cors({
		origin: "*",
	}),
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API
// Spirits
const { GetSpiritsData } = require("./src/API/Spirits/getSpiritData");
const { GetUserLogIn } = require("./src/API/Users/getUserLogIn");

// END API

app.get("/", (req, res) => {
	console.log("Zona 0");
	res.send("Tribes of Gaia - API");
});

// Rutas
app.get("/spirits", async (req, res) => {
	const allSpiritsNames = await GetSpiritsData();

	res.send(allSpiritsNames);
});


// Login / Logout
app.post("/loginAuth", async (req, res) => {
	console.log(req.body)
	const { authUsername, authPassword } = req.body;
	const user = await GetUserLogIn(authUsername, authPassword);
	console.log(user)
	// const token = req.headers.authtoken
	// console.log(token)
	res.send(user);
	res.end;
});

app.get("/logout", (req, res) => {
	console.log("log out")
	res.send()
})

console.log("Connection Back: OK");
app.listen(PORT, () => {
	console.log(`Servidor disponible en http://localhost:${PORT}`);
});

module.exports = app;
