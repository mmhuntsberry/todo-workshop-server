const express = require("express");
const app = express();
const pool = require("./sql/connection");
const PORT = process.env.PORT || 5000;
// Import the userRoutes from routes file
const userRoutes = require("./routes/users");


app.use(express.json())
app.use('/', userRoutes);

app.get('/', (req, res) => {
  res.json({
    message: "Hello world"
  })
});





app.listen(PORT, () => console.log(`I am listening on port ${PORT}`))

