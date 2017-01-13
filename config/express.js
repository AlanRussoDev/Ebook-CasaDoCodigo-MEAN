var express = require('express');
var app = express();


var home = require('./../app/routes/home');

home(app);
app.set('port',3000);
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));

module.exports = app;
