const express = require("express");

// crear routes
const router = express.Router();
// conexion a db
const conexion = require("./database/db");

router.get("/contacto", (req, res) => {
  res.render("index");
  /* conexion.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error;
    } else {
      res.send(results);
    }
  }); */
});

module.exports = router;
