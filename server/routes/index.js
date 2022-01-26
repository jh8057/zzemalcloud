const express = require("express");
const router = express.Router();

// define the about route
router.get("/about", function (req, res) {
  res.json({ data: "About Page" });
});

module.exports = router;
