var express = require("express");
var path = require("path");
var app = express();

function htmlRoutes(app, path, express){

  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

  
}