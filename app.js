
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars')

var index = require('./routes/index');

// Example route
// var user = require('./routes/user');

var app = express();
var methodOverride = require('method-override');
var session = require('express-session');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride());
app.use(express.cookieParser('moodi key'));
app.use(session({
    secret: 'moodi key',
    resave: true,
    saveUninitialized: true
}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'assets')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
