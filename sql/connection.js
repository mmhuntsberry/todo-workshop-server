const mysql = require("mysql2");

// This will pull in secrets from .env file
require("dotenv").config();

// Create connection to Database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

module.exports = pool;