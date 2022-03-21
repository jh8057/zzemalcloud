const express = require("express");
const router = express.Router();

// Test
router.get("/", (req, res) => {
  return res.json({
    msg: "GET DATA FROM ABOUT SERVER!",
  });
});

module.exports = router;
