const express = require("express");
var bodyParser = require("body-parser").json();

const app = express();

app.listen(3000, () => {
	console.log("El servidor está inicializado en el puerto 3000");
});

app.get("/", function (req, res) {
	res.send({ mensaje: "Saludos desde express" });
});

app.post("/registrar-usuario", bodyParser, function (req, res) {
	console.log("req");
	console.log(req.body);
});
