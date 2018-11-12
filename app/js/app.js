angular.module("pokemonApp", ["ngRoute"])
   .config(config)
   .run(run);

run.$inject = ["$rootScope", "$location"];
config.$inject = ["$routeProvider"];

function config($routeProvider) {
   $routeProvider
      .when("login", {
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

function run($rootScope, $location) {
   // $rootScope.$on("$routeChangeStart", function(e, route) {
   //    //if (route.originalPath !== "/login"){
   //       //if(!$rootScope.usuario) {
   //          $location.path("/treinador/login");
   //       //}
   //    //}
   // });
}