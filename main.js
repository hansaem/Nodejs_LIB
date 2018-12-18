var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/css', express.static(__dirname + '/public/CSS'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jQuery/dist/js'));
app.use('/public', express.static(__dirname + '/public'));
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get("/", function(req,res){
  res.render('Board.html');
});
app.get("/introduce", function(req,res){
	res.render("introduce_copy0.html");
});

app.get("/serviceHelper", function(req,res){
	res.render("serviceHelper.html");
});
app.get("/shiphelper", function(req,res){
	res.render("shiphelper.html");
});