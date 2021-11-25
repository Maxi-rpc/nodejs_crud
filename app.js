const express = require("express");
const app = express();
// motor de plantillas
app.set("view engine", "ejs");

// importar routes
app.use("/", require("./router"));

app.listen(5000, () => {
	console.log("Server corriendo en http://localhost:5000");
});
