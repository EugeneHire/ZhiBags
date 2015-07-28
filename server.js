var express = require('express');
var app = express();
var bagsJson =require('./bags.json') ;
var bags= Object.keys(bagsJson).map(function(k) { return bagsJson[k] });
var quotesJson =require('./quotes.json') ;
var quotes= Object.keys(bagsJson).map(function(k) { return bagsJson[k] });

app.use('/client', express.static(__dirname + '/client'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/', function(req, res){
	res.sendfile('client/index.html');
  console.log("TTT");
});

app.get('/test', function(req,res){
  res.sendfile('client/test.html');
});

app.get('/bags', function(req, res){  
  console.log("fetched bags")
  res.send(JSON.stringify(bags));
  });

app.get('/bags/:id', function(req,res){
  console.log("bag"+req.params.id+"fetch");
  res.send(bags[req.params.id]);
});

app.post('/bags', function(req, res){  
  console.log("got post bags");
  res.send("ok");
});

app.delete('/bags/:id', function(req, res){
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

app.get('/quotes', function(req, res){  
  res.send(JSON.stringify(quotes));
});

app.get('/quotes/:id', function(req, res){ 
 console.log("quote"+req.params.id+"fetch");
  res.send(quotes[req.params.id]); 
  res.send(JSON.stringify(quotes));
});

app.post('/quotes', function(req, res){ 
 console.log("quotes post");
  res.send("okay"); 
});

app.get("*", function(){
  res.send("no such method");  //need to send 404 static page
});

app.listen(8080);
console.log("app listen on 8080");
