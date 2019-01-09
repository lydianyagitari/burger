//burger server...........
//....
// Node Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

// Open Server
var port = process.env.PORT || 3000;
app.listen(port);
var app = express();

//Serves static content in to the application directory for the app from the "public" directory .
app.use(express.static(process.cwd() + '/public'));
// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//importing required route
var router = require('./controllers/burgers_controllers.js');
app.use('/', router);
