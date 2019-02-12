// Node Dependencies

var express = require('express');

var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var Sequelize = require('sequelize');


// Open Server

var PORT = process.env.PORT || 3000;



var app = express();

//Serve static content for the app from the "public" directory.

app.use(express.static(process.cwd() + "/public"));

//app.use(express.static('public'));

//app.use(methodOverride('X-HTTP-Method-Override'))


// Parse application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: false }));


app.use(methodOverride('_method'));

// Handlebars

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');





var router = require('./controllers/burgers_controller.js');

app.use('/', router);







app.listen(PORT, function() 

{

  console.log("App listening on PORT " + PORT);

});