var express = require('express');
var app = express();

var bagsJson =require('./bags.json') ;
var bags= Object.keys(bagsJson).map(function(k) { return bagsJson[k] });
var quotesJson =require('./quotes.json') ;
var quotes= Object.keys(bagsJson).map(function(k) { return bagsJson[k] });


app.get('/', function(req, res){
	res.sendfile('client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/bags', function(req, res){  
        res.send(JSON.stringify(bags));
    });

app.get('/quotes', function(req, res){  
        res.send(JSON.stringify(quotes));
    });

app.delete('/bag:id', function(req, res){
   id=req.params.id.shift()
   bags = bags.filter(function(obj) {
   return obj.id != id;
   });
   console.log(bags)
   res.send(bags);
   
   fs.writeFile('bags.json', JSON.stringify(bags), function (err,data) {
        if (err) {
        return console.log(err);
        }
        console.log(data);
    });
});

app.listen(8080);
console.log("app listen on 8080");
