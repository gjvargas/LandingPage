var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');
var Subscriber = require('./model.js');
var app = express();

var connection_string = 'mongodb://localhost:27017/quiksplit'
mongoose.connect(connection_string);
var db = mongoose.connection;

app.get('/', function (req, res) {
  res.sendFile('static/html/index.html', {root: __dirname});
});
app.get('/thanks', function (req, res) {
  res.sendFile('static/html/thanks.html', {root: __dirname});
});
app.get('/static/css/index.css', function (req, res) {
  res.sendFile('static/css/index.css', {root: __dirname});
});
app.get('/static/js/index.js', function (req, res) {
  res.sendFile('static/js/index.js', {root: __dirname});
});
app.get('/static/img/food.jpg', function (req, res) {
  res.sendFile('static/img/food.jpg', {root: __dirname});
});
app.get('/static/img/gradient-background.jpg', function (req, res) {
  res.sendFile('static/img/gradient-background.jpg', {root: __dirname});
});
app.get('/static/fonts/Raleway-Regular.ttf', function (req, res) {
  res.sendFile('static/fonts/Raleway-Regular.ttf', {root: __dirname});
});
app.get('/static/fonts/OpenSans-Regular.ttf', function (req, res) {
  res.sendFile('static/fonts/OpenSans-Regular.ttf', {root: __dirname});
});

app.post('/submit', function(req, res) {
    var sub = new Subscriber({
        email : req.body.email,
        cost : req.body.cost
    });
    Subscriber.register(sub, function(err, subscriber) {
        res.redirect('/thanks');
    });
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
