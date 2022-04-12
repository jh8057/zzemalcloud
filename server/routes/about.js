const express = require("express");
const router = express.Router();

const hello = require("../../middleware/hello.js")

// Test
router.get("/", hello(),
 (req, res) => {
  return res.json({
    msg: "GET DATA FROM ABOUT SERVER!",
  });
});

module.exports = router;
