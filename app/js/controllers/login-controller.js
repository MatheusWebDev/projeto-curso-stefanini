angular.module('PokemonModule')
    .controller('LoginController', LoginController);

    LoginController.$inject = [
        '$scope',
        '$rootScope', 
        '$location', 
        'Mensagens', 
        'TipoMensagem', 
        'UserService'];

function LoginController($scope, $rootScope, $location, Mensagens, TipoMensagem, UserService) {
    
    var self = this;
    self.service = UserService;

    self.login = function(usuario) {
        self.service.logar(usuario)
            .then(function(response){
                $rootScope.user = response.data;
                $location.path('/listar');
                $rootScope.addMensagem({texto: Mensagens.MENSAGEM_LOGIN_SUCESSO, tipo: TipoMensagem.SUCCESS}, false, true);
            },function(error){
                $rootScope.addMensagem({texto:  Mensagens.MENSAGEM_LOGIN_ERROR, tipo: TipoMensagem.ERROR}, false, true);
            });
            //$rootScope.addMensagem({texto: Mensagens.MENSAGEM_LOGIN_ERROR, tipo: TipoMensagem.ERROR}, true, true);
    };
}