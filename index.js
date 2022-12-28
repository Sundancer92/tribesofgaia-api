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
const { GetAllSpiritNames } = require("./src/API/Spirits/getAllSpiritsNames");
const { GetUserLogIn } = require("./src/API/Users/getUserLogIn");
const { tokenSign } = require("./src/helpers/userAuth");

// END API

app.get("/", (req, res) => {
	console.log("Zona 0");
	res.send("Tribes of Gaia - API");
});

// Rutas
app.get("/spirits", async (req, res) => {
	const allSpiritsNames = await GetAllSpiritNames();

	res.send(allSpiritsNames);
	res.end;
});

app.post("/validate", async (req, res) => {
	const { authUser, authPassword } = req.body;
	const user = await GetUserLogIn(authUser, authPassword);


	const token = tokenSign(user, res);
	res.send(token);
	res.end;
});

console.log("Connection Back: OK");
app.listen(PORT, () => {
	console.log(`Servidor disponible en http://localhost:${PORT}`);
});

module.exports = app;
