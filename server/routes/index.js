const express = require("express");
const router = express.Router();

const about = require("./about");
router.use("/about", about);

const naverSearch = require("./naverSearch");
router.use("/naverSearch", naverSearch);

module.exports = router;
