angular.module("pokemonApp", ["ngRoute"])
   .config(config)
   .run(run);

run.$inject = ["$rootScope", "$location"];
config.$inject = ["$routeProvider"];

function config($routeProvider) {
   $routeProvider
      .when("/login", {
         templateUrl: "/app/views/login.html"
        // controller: "loginController"
      })
      .when("/listar", {
         templateUrl: "/app/views/listar.html",
         controller: "listarPokemonController"
      })
      .when("/cadastrar", {
         templateUrl: "/app/views/cadastrar.html",
         controller: "cadastrarPokemonController"
      })
      .otherwise({
         redirectTo: "/login"
      });
}

function run($rootScope, $location) {
   // $rootScope.$on("$routeChangeStart", function(e, route) {
   //    if (route.originalPath !== "/login"){
   //       if(!$rootScope.usuario) {
   //          $location.path("/login");
   //       }
   //    }
   // });
}