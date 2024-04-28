require('dotenv').config()
const express = require("express");
// const cors = require("cors");

const app = express();

const PORT = 4000

// app.use(cors());
app.get("/registation", (req, res) => {
  res.send(`sidit`);
});
// console.log(process.env.PORT)
app.listen(process.env.PORT, () => {
  console.log("sidit");
});

