var express = require('express');
var app = express();
var load = require('express-load');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

load('models', {cwd : 'app'})
    .then('controllers')
    .then('routes')
    .into(app);

app.set('port',3000);
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(methodOverride())
app.use(express.static('./public'));

module.exports = app;
