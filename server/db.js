const mysql = require("mysql");
const DB = mysql.createPool({
  connetionLimit: 10,
  host: "mysql",
  user: "root",
  password: "zzemal",
  database: "myapp",
});

DB.connect();

exports.DB = DB;
