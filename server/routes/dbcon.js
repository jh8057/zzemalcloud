const express = require("express");
const router = express.Router();

const db = require("../db.js");

app.get("/users", (req, res) => {
  db.connection.query("SELECT * from users", (err, results) => {
    if (err) throw error;
    console.log("User info is: ", results);
    res.send(results);
  });
});
