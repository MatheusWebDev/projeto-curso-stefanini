angular.module('PokemonModule', ['ngRoute'])
    .config(config)
    .run(run);

config.$inject = ['$routeProvider'];
run.$inject = ['$rootScope', '$timeout', '$location'];

function config($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/app/pages/login.html',
            controller: 'LoginController as vm'
        })
        .when('/listar', {
            templateUrl: '/app/pages/listar.html',
            controller: 'ListarPokemonController as vm'
        })
        .when('/cadastrar', {
            templateUrl: '/app/pages/cadastrar.html',
            controller: 'CadastrarPokemonController as vm'
        })
        .when('/listarTreinadores', {
            templateUrl: '/app/pages/listarTreinadores.html',
            controller: 'ListarTreinadoresController as vm'
        })
        .when('/cadastrarTreinador', {
            templateUrl: '/app/pages/cadastrarTreinador.html',
            controller: 'CadastrarTreinadorController as vm'
        })
        .otherwise({
            redirectTo: '/login'
        });

}

function run($rootScope, $timeout, $location) {
    $rootScope._mensagens = [];

    // $rootScope.$on('$routeChangeStart', function (evt, route) {
    //     if (route.originalPath !== '/login' && route.originalPath !== '/cadastrarTreinador' && !$rootScope.user) {
    //         $location.path('/login');
    //     }
    // });


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