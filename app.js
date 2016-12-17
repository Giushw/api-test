var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');


var express = require('express');
var  db= require('./gestione');

var app = express();



app.post('/elenco/crea/:quanti', function (req, res) {
	db.gestionePersone.creaCasuali(req.params.quanti);
	res.end();
});

app.get('/elenco/tutti', function (req, res) {
	res.send(db.gestionePersone.tutti());
});

app.listen(4156, function () {
  console.log('Server in esecuzione sulla porta 4156...');
});
