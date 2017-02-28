var express = require("express");
var qs = require("qs");
var querystring = require('querystring');
var request = require("sync-request");
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

app.post("/recover", function(req, res){
  var v = request('POST', "http://localhost:5000", 
    {
    }
  );

  console.log(v.statusCode);

  res.status(200);  
  res.send();
});

var server = app.listen(app.get('port'), function() {
  var host = server.address().address;
  var port = port;
});
