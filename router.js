const express = require("express");

// crear routes
const router = express.Router();
// conexion a db
const conexion = require("./database/db");

// mostrar registros
router.get("/", (req, res) => {
  conexion.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("index", { results: results });
    }
  });
});

// crear registro
router.get("/create", (req, res) => {
  res.render("create");
});

module.exports = router;
