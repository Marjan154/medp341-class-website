var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res) {
  console.log("requested main page");
  res.sendfile("index.html");
});

app.get("/about", function(req, res) {
  console.log("requested about page");
  res.send("<h1>About Page</h1><p>boo boo be doo</p>");
});

app.post("/login", (req, res, next) => {
  console.log("requested about page");
  console.log(req.body);
  res.end(JSON.stringify(req.body));
});

app.get("/getTotal", (req, res, next) => {
  res.end(JSON.stringify("Total: $3.12"));
});

app.listen(8080);
