const mysql = require("mysql");

// conexion a DB obj config
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_nodejs_db",
});

conexion.connect((error) => {
  if (error) {
    console.error("EL error de conexion es: " + error);
    return;
  }
  console.log("Conectado a la BD Mysql");
});

module.exports = conexion;
