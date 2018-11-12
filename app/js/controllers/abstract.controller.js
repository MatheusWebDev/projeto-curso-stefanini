angular.module("pokemonApp").controller("abstractController", abstractController);

abstractController.$inject = ["$scope","$rootScope", "$location"];

function abstractController($scope, $rootScope, $location) {
   
   $scope.logar = function (usuario) {
      $rootScope.usuario = angular.copy(usuario);
      $rootScope.checkUsuario();
      if ($rootScope.logado) { $location.path("/treinador/listar"); }
   };

   $scope.sair = function () {
      $rootScope.logado = false;
      $rootScope.usuario = {};
      $location.path("/login");
   };

   $scope.loginOk = function () {
      
   };

   $scope.go = function ( path ) {
      $location.path( path );
   };
}