require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

// Require routes and use them
const routes = require('./routes');
app.use(routes);


// Define middleware
const middleware = (req, res, next) => {
  console.log("Middleware executed");
  next();
};

// Use middleware
app.use(middleware);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
