const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6588462",
  password: "clPPNR2XTD",
  database: "sql6588462",
  multipleStatements: true,
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = { connection };
