var contatos = [
    {_id: "1",nome: 'Contato Exemplo 1'},
    {_id: "2",nome: 'Contato Exemplo 2'},
    {_id: "3",nome: 'Contato Exemplo 3'}
]

module.exports = function(){
    var controller = {};

    controller.listaContatos = function(req, res){
        res.json(contatos);
    }

    return controller;
}