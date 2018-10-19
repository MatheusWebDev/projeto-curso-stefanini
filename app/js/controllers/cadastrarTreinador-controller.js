angular.module('PokemonModule')
    .controller('CadastrarTreinadorController', CadastrarTreinadorController);

    CadastrarTreinadorController.$inject = ['$rootScope', '$location', 'UserService', 'Mensagens', 'TipoMensagem'];

function CadastrarTreinadorController($rootScope, $location, UserService, Mensagens, TipoMensagem) {
    var self = this;

    self.service = UserService;

    self.cadastrar = function (treinador) {
        treinador.id = self.service.treinadores.length + 1;
        treinador.usuario.id = self.service.treinadores.length + 1;
        
        self.service.cadastrar(treinador)
        .then(function(response) {
            $rootScope.addMensagem({texto: Mensagens.MENSAGEM_INCLUIR_TREINADOR_SUCESSO, tipo: TipoMensagem.SUCCESS}, true, false);
            self.listar();
        }, function(error) {
            console.log(error.data.mensagem);
            $rootScope.addMensagem({texto: error.data.mensagem, tipo: TipoMensagem.ERROR}, true, false);
            console.log('error cadastrar');
        });

        $rootScope.addMensagem({texto: Mensagens.MENSAGEM_INCLUIR_TREINADOR_SUCESSO, tipo: TipoMensagem.SUCCESS}, true, false);
    };

    self.listar = function() {
        $location.path('/listarTreinadores');
    };
}