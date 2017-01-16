var http = require('http');
var app = require('./config/express');
require('./config/database')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'),function(){
    console.log('Servidor ouvindo na porta : ' + app.get('port'));
})