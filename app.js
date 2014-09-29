var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var util = require('util');
var routeDef = require('./routes/routesRegistry.js');

var app = express();

// setting up the app view engine as EJS
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',routeDef);


module.exports = app;