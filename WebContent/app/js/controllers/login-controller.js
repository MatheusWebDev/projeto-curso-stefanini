angular.module('PokemonModule')
    .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope','$rootScope', '$location', 'Constantes', 'TipoMensagem'];

function LoginController($scope, $rootScope, $location, Constantes, TipoMensagem) {
    
    var self = this;
    
    self.login = function(usuario) {
        if (usuario.username !== 'david') {
            $rootScope.addMensagem({texto: Constantes.LOGIN_ERROR, tipo: TipoMensagem.ERROR}, false, true);
        } else {
            $rootScope.user = usuario;
            $location.path('/listar');
            $rootScope.addMensagem({texto: Constantes.LOGIN_SUCESSO, tipo: TipoMensagem.SUCCESS}, false, true);
        }
    }

}