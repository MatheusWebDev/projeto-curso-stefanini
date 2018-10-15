angular.module('PokemonModule', ['ngRoute'])
    .config(config)
    .run(run);

config.$inject = ['$routeProvider'];
run.$inject = ['$rootScope', '$timeout', '$location'];

function config($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'WebContent/app/pages/login.html',
        controller: 'LoginController as vm'
    })
    .when('/listar', {
        templateUrl: 'WebContent/app/pages/listar.html', 
        controller: 'PokemonController as vm'
    })
    .when('/cadastrar', {
        templateUrl: 'WebContent/app/pages/cadastrar.html',
        controller: 'PokemonController as vm'
    })
    .otherwise({
        redirectTo: '/login'
    });

}

function run($rootScope, $timeout, $location) {
    $rootScope._mensagens = [];

    $rootScope.$on('$routeChangeStart', function(evt, route) {
        if (route.originalPath !== '/login' && !$rootScope.user) {
            $location.path('/login');
        }
    });


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