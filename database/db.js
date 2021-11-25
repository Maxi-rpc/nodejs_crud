const mysql = require("mysql");

// conexion a DB obj config
const conexion = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "crud_nodejs_db",
});
