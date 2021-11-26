const mysql = require("mysql");

// DB config
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud_nodejs_db",
});
// conexion test
conexion.connect((error) => {
  if (error) {
    console.error("EL error de conexion es: " + error);
    return;
  }
  console.log("Conectado a la BD Mysql");
});
// exportar modulo
module.exports = conexion;
