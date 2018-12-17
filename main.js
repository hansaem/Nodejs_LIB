var express = require("express");
var app = express();

app.listen(3000, function(){
	console.log("listen");
});

app.get("/", function(req,res){
	res.send("helloworld");
});