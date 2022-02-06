const mysql = require("mysql");
const DBpool = mysql.createPool({
  connetionLimit: 10,
  host: "localhost",
  port:'3306',
  user: "root",
  password: "password",
  database: "testDB"
});

function getConnection(callback){
  DBpool.getConnection((err,conn)=>{
    if(!err){
      callback(conn);
    }
  })
}

module.exports = getConnection;
