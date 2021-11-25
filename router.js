const express = require("express");

// crear routes
const router = express.Router();

router.get("/contacto", (req, res) => {
	res.send("Contacto");
});

module.exports = router;
