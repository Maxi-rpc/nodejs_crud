const express = require("express");
const app = express();
// motor de plantillas
app.set("view engine", "ejs");

// importar routes
app.use("/", require("./router"));

app.listen(3001, () => {
	console.log("Server corriendo en http://localhost:3001");
});
