
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true}));

require("./app/routes.js")(app, path, express);

app.listen(PORT, function() {
  console.log("App listening on Port " + PORT);
});

