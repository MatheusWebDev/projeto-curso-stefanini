angular.module('PokemonModule')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','$rootScope', '$location', 'Mensagens', 'TipoMensagem'];

function LoginController($scope, $rootScope, $location, Mensagens, TipoMensagem) {
    
    var self = this;
    
    self.login = function(usuario) {
        if (usuario.username !== 'david') {
            $rootScope.addMensagem({texto: Mensagens.MENSAGEM_LOGIN_ERROR, tipo: TipoMensagem.ERROR}, true, true);
        } else {
            $rootScope.user = usuario;
            $location.path('/listar');
            $rootScope.addMensagem({texto: Mensagens.MENSAGEM_LOGIN_SUCESSO, tipo: TipoMensagem.SUCCESS}, true, true);
        }
    };

}