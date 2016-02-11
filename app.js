/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var index = require('./routes/index');
var about = require('./routes/about');
var feedPage = require('./routes/feedPage');
var details = require('./routes/details');
var newPost = require('./routes/newPost');
// Example route
// var user = require('./routes/user');

var app = express();
var handlebars = require('express-handlebars')
var favicon = require('favicon');
var logger = require('logger');
var json = require('json');
var methodOverride = require('method-override');
var session = require('express-session');

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
// app.use(favicon());
// app.use(logger('dev'));
// app.use(json());
// app.use(express.urlencoded());
app.use(methodOverride());
// app.use(express.cookieParser('moodi key'));
app.use(session({
    secret: 'moodi key',
    resave: true,
    saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'assets')));

// development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

// Add routes here
app.get('/', index.view);
app.get('/about', about.view);
app.get('/feedPage', feedPage.view);
app.get('/details',details.feeddetails);
app.get('/newPost',newPost.writePost);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
