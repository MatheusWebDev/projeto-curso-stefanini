angular.module('PokemonModule', [])
    .run(appRun);

appRun.$inject = ['$rootScope', '$timeout'];

function appRun($rootScope, $timeout) {
    $rootScope._mensagens = [];

    $rootScope.limparMensagens = function () {
        $rootScope._mensagens = [];
    };

    $rootScope.getMensagens = function () {
        return $rootScope._mensagens;
    };

    $rootScope.addMensagem = function (mensagem, limparMensagens, timeout) {
        if (limparMensagens) {
            $rootScope.limparMensagens();
        }

        $rootScope._mensagens.push(mensagem);

        if (timeout && !limparMensagens) {
            $timeout(function () {
                $rootScope.limparMensagens();
            }, 5000);            
        }
    };
}