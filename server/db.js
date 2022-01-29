const mysql = require("mysql");
const pool = mysql.createPool({
  connetionLimit: 10,
  host: "mysql",
  user: "root",
  password: "zzemal",
  database: "myapp",
});

exports.pool = pool;
