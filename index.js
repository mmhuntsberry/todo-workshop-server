const express = require("express");
const app = express();

const pool = require("./sql/connection");

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({
    message: "Hello world"
  })
});

app.get('/users', (req, res) => {
  pool.query("SELECT * FROM users", (err, results, fields) => {
    res.json(results);
  })
});



app.listen(PORT, () => console.log(`I am listening on port ${PORT}`))

