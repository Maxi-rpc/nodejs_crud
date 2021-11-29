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

// editar registro
router.get("/edit/:id", (req, res) => {
  const id = req.params.id;

  conexion.query("SELECT * FROM users WHERE id=?", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.render("edit", { user: results[0] });
    }
  });
});

// crear registro
router.get("/create", (req, res) => {
  res.render("create");
});

// eliminar registro
/* router.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  conexion.query("DELETE FROM users WHERE id=?", [id], (error, results) => {
    if (error) {
      throw error;
    } else {
      res.redirect("/");
    }
  });
}); */

// controlador
const crud = require("./controllers/crud");
// rutas del controlador
router.post("/save", crud.save);
router.post("/update", crud.update);
router.post("/delete/:id", crud.delete);

module.exports = router;
