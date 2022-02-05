const express = require("express");
const router = express.Router();

// define the about route
const dbcon = require("./dbcon.js");

router.use("/dbcon", dbcon);

module.exports = router;
