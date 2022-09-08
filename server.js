const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const sequelize = require("sequelize"); 
const db = require("./server/models");
const app = express();  
const events = require('./server/events/events');
const usersBaseUrl = require("./src/assets/json/users.json"); 
const { env } = require("process");
const { preProcessFile } = require("typescript");

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

const connection = mysql.createConnection({
  host: process.env.DBPHOST,
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD,
  db: process.env.DBNAME,
  debug: true
  
}); 

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(events(connection)); 

// Page Route
app.get("/", (req, res) => {
  res.json({message: "Welcome to Elixir DB"});
});

// API Route
app.get("/api/users", (req, res) => {
  res.json(usersBaseUrl);
});

// API Route
app.post("/api/users/id", (req, res) => {
  res.json(usersBaseUrl);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});                        