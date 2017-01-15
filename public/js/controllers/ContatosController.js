angular.module('contatooh').controller('ContatosController', function ($scope, $resource) {
     // $scope.contatos = [
    //     {_id: "1",nome: 'Contato Exemplo 1', email : 'cont1@empresa.com.br'},
    //     {_id: "2",nome: 'Contato Exemplo 2', email : 'cont2@empresa.com.br'},
    //     {_id: "3",nome: 'Contato Exemplo 3', email : 'cont3@empresa.com.br'}
    // ]

    var init = function(){
        $scope.mensagem = {texto : ''};
        $scope.contatos = [];
        $scope.filtro = '';        
        buscaContatos();        
    };

    init();

    function buscaContatos(){
        
        var Contato = $resource('/contatos');
        Contato.query(function(contatos){
                $scope.contatos = contatos; 
            }, function(error){
                $scope.mensagem = {
                    texto : 'Não foi possível obter a lista de contatos'
                };
                console.log(error)
        })
    }

   
   $scope.remove = function(contato){
       var Contato = $resource('/contatos/:id');
       Contato.delete({id : contato._id},
        buscaContatos,
        function(erro){
            $scope.mensagem = {
                    texto : 'Não foi possivel remover o contato'
                };
            console.log(erro)
        }
       );
   }

    // $scope.total = 0;

    // $scope.incrementa = function () {
    //     $scope.total++;
    // }

    // $http.get('/contatos')
    //     .success(function(data){
    //         $scope.contatos = data;
    //         // $scope.total = data.length;
    //     })
    //     .error(function(error){
    //         console.log('Não foi possível obter a lista de contatos')
    //         console.log(error)
    //     })

  
    
});