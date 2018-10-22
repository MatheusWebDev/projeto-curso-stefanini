angular.module('PokemonModule')
    .controller('ListarTreinadoresController', ListarTreinadoresController);

ListarTreinadoresController.$inject = ['$rootScope', 'UserService', 'TipoMensagem', 'Mensagens', '$location'];

function ListarTreinadoresController ($rootScope, UserService, TipoMensagem, Mensagens, $location) {
    
    var self = this;
    self.service = UserService;

    self.init = function () {
        self.listar();
    };

    self.listar = function() {
        self.service.listar()
        .then(function(response) {
            self.service.treinadores = response.data;
            console.log(self.service.treinadores);
        }, function(error) {
            $rootScope.addMensagem({texto: error.mensagem, tipo: TipoMensagem.ERROR}, false, true);//mudei tipo de mensagem e botei pra apagar
        });
    };

    self.excluir = function(treinador){
        console.log(treinador);
        self.service.excluir(treinador.id)
            .then(function(response){
                $rootScope.addMensagem({texto: Mensagens.MENSAGEM_EXCLUIR_TREINADOR_SUCESSO, tipo: TipoMensagem.SUCCESS}, true, true);
                self.listar();
            },function(error){
                $rootScope.addMensagem({texto: error.mensagem, tipo: TipoMensagem.ERROR}, false, true);
            });
    };

    self.editar = function(treinador){
        self.service.treinadorSelecionado = treinador;
        $location.path('/cadastrarTreinador');
    };
}