angular.module("pokemonApp", ["ngRoute"])
   .config(config)
   .run(run);

run.$inject = ["$rootScope", "$location"];
config.$inject = ["$routeProvider"];

function config($routeProvider) {
   $routeProvider
      .when("/login", {
         templateUrl: "/app/views/login.html",
      })
      .when("/listar", {
         templateUrl: "/app/views/listar.html",
      })
      .when("/cadastrar", {
         templateUrl: "/app/views/cadastrar.html",
         controller: "cadastrarPokemonController as cadastrarPokemon"
      })
      .otherwise({
         redirectTo: "/login"
      });
}

function run($rootScope, $location) {
   $rootScope.$on("$routeChangeStart", function(e, route) {
      if (route.originalPath !== "/login"){
         if(!$rootScope.usuario) {
            $location.path("/login");
         }
      }
   });
}