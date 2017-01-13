var express = require('express');
var app = express();
var load = require('express-load');
// var home = require('./../app/routes/home');

// home(app);

load('models', {cwd : 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

app.set('port',3000);
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./public'));

module.exports = app;
