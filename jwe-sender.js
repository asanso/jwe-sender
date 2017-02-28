var express = require("express");
var jose = require('node-jose');
var nosql = require('nosql').load('database.nosql');
var app = express();
var cons = require('consolidate');
var __ = require('underscore');
__.string = require('underscore.string');

app.set('port', (process.env.PORT || 5001));
app.engine('html', cons.underscore);
app.set('view engine', 'html');
app.set('views', 'files');

var JWE = jose.JWE;
var JWK = jose.JWK;

app.get("/", function(req, res){
  res.render('index');
});

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = port;
});
