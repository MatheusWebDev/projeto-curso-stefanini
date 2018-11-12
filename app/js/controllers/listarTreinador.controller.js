angular.module("pokemonApp").controller("listarTreinadorController", listarTreinadorController);

listarTreinadorController.$inject = ["$scope", "$rootScope", "$location", "treinadorService"];

function listarTreinadorController ($scope, $rootScope, $location, treinadorService) {
   $scope.service = treinadorService;
   
   $scope.deletar = function (index) {
      $scope.service.listaTreinadores.splice(index, 1);
   };

   $scope.irTelaCadastrar = function () {
      $location.path("/treinador/cadastrar");
   };

   $scope.editar = function () {
      $scope.service.treinador = treinador;
      $scope.irTelaCadastrar();
   };
}