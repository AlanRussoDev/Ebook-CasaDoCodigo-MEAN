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

    controller.obtemContato = function(req, res){
        var idContato = req.params.id;
        var contato = contatos.filter(function(contato){
            return contato._id == idContato;
        })[0];

        contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
        console.log(req.params.id);
    }

    return controller;
}