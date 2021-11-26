const express = require("express");
const app = express();
// motor de plantillas
app.set("view engine", "ejs");
// config recepcion de datos por url y json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// importar routes
app.use("/", require("./router"));

app.listen(5000, () => {
  console.log("Server corriendo en http://localhost:5000");
});
