require("dotenv").config();
const express = require("express");
const app = express.Router();

const signUp = require("../controllers/signup.pannel.controllers");

app.get("/", (req, res) => {
  res.send("Hello, Everything looks cool");
});

app.post("/signUp/", signUp.SignUpController);

module.exports = app;
