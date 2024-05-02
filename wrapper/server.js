/* eslint-disable no-undef */
const express = require("express");
const path = require("path")
const app = express();
const PORT = 3763;

app.use(express.static("public"));

app.use(function(req, res) {
  res.status(404)
  res.sendFile(path.join(__dirname, 'public/404.html'));
});

// eslint-disable-next-line no-unused-vars
var server = app.listen(PORT);
