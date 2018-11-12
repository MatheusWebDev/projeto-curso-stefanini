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
         controller: "listarTreinadorController as lisTrein"
      })
      .when("/treinador/cadastrar", {
         templateUrl: "/app/views/treinador/cadastrar.html",
         controller: "cadastrarTreinadorController as cadTrein"
      })
      .when("/pokemons/listar", {
         templateUrl: "/app/views/pokemons/listar.html",
         controller: "listarPokemonController as lisPoke"
      })
      .when("/pokemons/cadastrar", {
         templateUrl: "/app/views/pokemons/cadastrar.html",
         controller: "cadastrarPokemonController as cadPoke"
      })
      .otherwise({
         redirectTo: "/login"
      });
}

function run($rootScope, $location, treinadorService) {
   $rootScope.userFixo = treinadorService.listaTreinadores[0]; 
   $rootScope.usuario = {};
   $rootScope.logado = false;
   $rootScope.naoLogadoMsg = "";

   $rootScope.$on("$routeChangeStart", function(e, route) {
      if (route.originalPath !== "/login") {
         $rootScope.naoLogadoMsg = "";
         $rootScope.naoAuthMsg = "";
         $rootScope.checkUsuario();
      }
   });

   $rootScope.checkUsuario = function () {
      if (!$rootScope.isEmpty($rootScope.usuario)) {
         if ($rootScope.usuario.nome !== $rootScope.userFixo.nome || $rootScope.usuario.senha !== $rootScope.userFixo.senha) {
            $rootScope.naoAuthMsg = "Usuario ou Senha incorretos!";
            $location.path("/login");
            return;
         } else {
            $rootScope.logado = true;
         }
      }
      if ($rootScope.isEmpty($rootScope.usuario)) {
         $rootScope.naoLogadoMsg = "Faça o Login!";
         $location.path("/login");
      }
   };

   $rootScope.isEmpty = function (obj) {
      for (var key in obj) {
         if (obj.hasOwnProperty(key)) {
            return false;  
         }
      }
      return true;
   };
}