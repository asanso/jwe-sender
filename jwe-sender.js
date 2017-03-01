var express = require("express");
var qs = require("qs");
var bodyParser = require('body-parser');
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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var JWE = jose.JWE;
var JWK = jose.JWK;

app.get("/", function(req, res){
  res.render('index');
});

app.post("/recover", function(req, res){
  
  var form_data = qs.stringify({
    token: 'eyJhbGciOiJFQ0RILUVTK0ExMjhLVyIsImVuYyI6IkExMjhDQkMtSFMyNTYiLCJlcGsiOnsia3R5IjoiRUMiLCJ4IjoiZ1RsaTY1ZVRRN3otQmgxNDdmZjhLM203azJVaURpRzJMcFlrV0FhRkpDYyIsInkiOiJjTEFuakthNGJ6akQ3REpWUHdhOUVQclJ6TUc3ck9OZ3NpVUQta2YzMEZzIiwiY3J2IjoiUC0yNTYifX0.qGAdxtEnrV_3zbIxU2ZKrMWcejNltjA_dtefBFnRh9A2z9cNIqYRWg.pEA5kX304PMCOmFSKX_cEg.a9fwUrx2JXi1OnWEMOmZhXd94-bEGCH9xxRwqcGuG2AMo-AwHoljdsH5C_kcTqlXS5p51OB1tvgQcMwB5rpTxg.72CHiYFecyDvuUa43KKT6w'
  });

  var headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  
  var v = request('POST', "http://localhost:5000", 
    {
      body: form_data,
      headers: headers
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
