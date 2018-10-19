angular.module('PokemonModule')
    .controller('ListarTreinadoresController', ListarTreinadoresController);

ListarTreinadoresController.$inject = ['$rootScope', 'UserService', 'TipoMensagem'];

function ListarTreinadoresController ($rootScope, UserService, TipoMensagem) {
    
    var self = this;
    self.service = UserService;

    self.init = function () {
        self.listar();
    };

    self.listar = function() {
        self.service.listar()
        .then(function(response) {
            self.service.treinadores = response.data;
        }, function(error) {
            $rootScope.addMensagem({texto: error.mensagem, tipo: TipoMensagem.SUCCESS}, true, false);
        });
    };
}