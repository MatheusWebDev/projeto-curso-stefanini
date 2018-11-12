angular.module("pokemonApp").controller("abstractController", abstractController);

abstractController.$inject = ["$scope","$rootScope", "$location"];

function abstractController($scope, $rootScope, $location) {
   
   $scope.logar = function (usuario) {
      $rootScope.usuario = angular.copy(usuario);
      $rootScope.checkUsuario();
      $location.path("/treinador/listar");
   };
   
   $rootScope.checkUsuario();


   $scope.sair = function () {
      $rootScope.logado = false;
      $rootScope.usuario = {};
      $location.path("/login");
   };

   $scope.go = function ( path ) {
      $location.path( path );
   };
}