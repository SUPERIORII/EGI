const mysql2 = require("mysql2");
require("dotenv").config();

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
});

db.connect((err) => {
  if (err) return console.log("error:", err.message);

  db.query("CREATE DATABASE IF NOT EXISTS ecorise_database", (err) => {
    if (err) return console.log("Error", err.message);
    console.log("database is created successfully");
  });

  console.log("database is connected");
});
