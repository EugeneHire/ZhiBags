var express = require('express');
var app = express();
fs = require('fs');
var ara =require('./bags.json') ;



app.get('/', function(req, res){
	res.sendfile('client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
app.use('/js', express.static(__dirname + '/js'));


app.get('/bags', function(req, res){ 
	
 	res.send(JSON.stringify(ara));
    });

app.delete('/removebag:id', function(req, res){
	console.log(req.params.id);


	res.send(req.params.id);
});


app.listen(8080);
console.log("app listen on 8080");
