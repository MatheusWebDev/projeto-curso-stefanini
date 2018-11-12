angular.module("pokemonApp").controller("cadastrarTreinadorController", cadastrarTreinadorController);

cadastrarTreinadorController.$inject = ["$scope", "$rootScope", "$location", "treinadorService", "pokemonService"];

function cadastrarTreinadorController ($scope, $rootScope, $location, treinadorService, pokemonService) {
   $scope.contadorId = 0;
   $scope.service = treinadorService;
   $scope.pokemonService = pokemonService;

   $scope.cadastrar = function (treinador) {
      if (treinador.id){
         var treinadorAlterar = $scope.service.listaTreinadores.filter(function(treinadorItem) {
            if (treinadorItem.id === treinador.id) {
               return treinadorItem;
            }
         });
         var index = $scope.service.listaTreinadores.indexOf(treinadorAlterar[0]);
         $scope.service.listaTreinadores.splice(index, 1, treinador);
      } else {
         treinador.id = ++$scope.contadorId;           
         $scope.service.listaTreinadores.push(angular.copy(treinador));
      }
      $scope.service.treinador = {};
      $location.path("/treinador/listar");
   };
}