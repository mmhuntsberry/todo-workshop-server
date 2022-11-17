const express = require("express");
const router = express.Router();
const pool = require("../sql/connection");

// TODO - BREAK OUT ALL CONTROLLERS INTO CONTROLLER FILE. 

router.get('/users', (req, res) => {
  pool.query("SELECT * FROM users", (err, results, fields) => {
    res.json(results);
  })
});

// GET BY ID - USER 
router.get('/users/:id', (req, res) => {
  const id = req.params.id;
  pool.query(`SELECT * FROM users WHERE id = ${id}`, (err, results, fields) => {
    res.json(results);
  })
});

// CREATE - USER
router.post('/users', (req, res) => {
  const {name, email, password} = req.body;
  pool.query(
    // SQL QUERY
    `INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`, 
    // ABSTRACTED VARS
    [null, name, email, password],
    // CALLBACK FUNCTION
    (err, results, fields) => {
      res.json(results);
    });
});

router.put('/users/:id', (req, res) => {
  const { id } = req.params;

  pool.query(
    // SQL QUERY
    `UPDATE users SET ? WHERE id = ?`, 
    // ABSTRACTED VARS
    [req.body, id],
    // CALLBACK FUNCTION
    (err, results, fields) => {
      res.json(results);
    });
});

router.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  pool.query(
    // SQL QUERY
    `DELETE FROM users WHERE id = ?`, 
    // ABSTRACTED VARS
    [id],
    // CALLBACK FUNCTION
    (err, results, fields) => {
      res.json(results);
    });
});

module.exports = router;