const express = require("express");
const router = express.Router();

const about = require("./about");
router.use("/about", about);

module.exports = router;
