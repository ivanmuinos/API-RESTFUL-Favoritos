'use strict'

var express = require('express');
var bodyParser = require('body-parser');



var app = express();
var api = require('./routes/favorito');

//llama a otro metodo
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//recibe una request, respuesta y parametro next
app.use((req, res, next) =>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
	res.header('Allow', 'GET, POST, PUT, OPTIONS, DELETE');

	next();
});

app.use('/api', api);


module.exports = app;