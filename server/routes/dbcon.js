const express = require("express");
const router = express.Router();

const getConnection = require("../db.js");

router.get("/users", (req, res) => {
  console.log("db connect start")
  getConnection((conn)=>{
    conn.query('select * from JHTable;',(err,result)=>{
      if(err){
        return res.send(400);
      }
      res.send(result)
      conn.release();
    })
  })
  console.log("db connect end")

});

module.exports = router;