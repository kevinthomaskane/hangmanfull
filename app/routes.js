

function htmlRoutes(app, path, express){

  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"))
  });

  app.use("/", express.static("public"));

}

module.exports = htmlRoutes;