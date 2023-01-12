const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "sql6.freesqldatabase.com",
  user: "sql6590164",
  password: "L5Qa6rDkGx",
  database: "sql6590164",
  multipleStatements: true,
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = { connection };
