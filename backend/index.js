const express = require("express");
const mysql = require("mysql2");
const app = express();

const db = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "employee_db"
});

db.connect(err => {
  if (err) console.log(err);
  else console.log("MySQL Connected");
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) res.send(err);
    else res.send(result);
  });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
