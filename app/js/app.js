angular.module("pokemonApp", ["ngRoute"])
   .config(config)
   .run(run);

run.$inject = ["$rootScope", "$location", "treinadorService"];
config.$inject = ["$routeProvider"];

function config($routeProvider) {
   $routeProvider
      .when("/login", {
         templateUrl: "/app/views/login.html",
         controller: "abstractController"
      })
      .when("/treinador/listar", {
         templateUrl: "/app/views/treinador/listar.html",
         controller: "listarTreinadorController as listarTreinador"
      })
      .when("/treinador/cadastrar", {
         templateUrl: "/app/views/treinador/cadastrar.html",
         controller: "cadastrarTreinadorController as cadastrarTreinador"
      })
      .when("/pokemons/listar", {
         templateUrl: "/app/views/pokemons/listar.html",
         controller: "listarPokemonController as listarPokemons"
      })
      .when("/pokemons/cadastrar", {
         templateUrl: "/app/views/pokemons/cadastrar.html",
         controller: "cadastrarPokemonController as cadastrarPokemons"
      })
      .otherwise({
         redirectTo: "/login"
      });
}

function run($rootScope, $location, treinadorService) {
   $rootScope.treinadorFixo = treinadorService.listaTreinadores[0]; 
   $rootScope.usuario = {};
   $rootScope.logado = false;

   $rootScope.$on("$routeChangeStart", function(e, route) {
      if (route.originalPath !== "/login"){
         $rootScope.checkUsuario(e);
      }
   });

   $rootScope.checkUsuario = function (e) {
      if ($rootScope.usuario !== {}) {
         if ($rootScope.usuario.nome !== $rootScope.treinadorFixo.nome || $rootScope.usuario.senha !== $rootScope.treinadorFixo.senha) {
            $location.path("/login");
            $rootScope.logado = false;
            return;
         }
      }
      $rootScope.logado = true;
   };
}