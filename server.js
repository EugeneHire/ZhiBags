var express = require('express');
var app = express();

var bags = [
        {
            id: 0,
            price: 100,
            name: 'first'
        },
        {
            id: 1,
            price: 110,
            name: 'second'
        },
        {
            id: 2,
            price: 120,
            name: 'third'
        }
    ];



app.get('/', function(req, res){
	res.sendfile('client/index.html');
});
app.use('/client', express.static(__dirname + '/client'));
app.use('/js', express.static(__dirname + '/js'));

app.get('/bags', function(req, res){  
        res.send(JSON.stringify(bags));
    });

app.listen(8080);
console.log("app listen on 8080");
