angular.module("pokemonApp").controller("listarTreinadorController", listarTreinadorController);

listarTreinadorController.$inject = ["$scope", "$rootScope", "$location", "treinadorService", "pokemonService"];

function listarTreinadorController ($scope, $rootScope, $location, treinadorService, pokemonService) {
   $scope.service = treinadorService;
   $scope.pokemonService = pokemonService;
   
   $scope.deletar = function (index) {
      var treinDel = $scope.service.listaTreinadores[index];
      $scope.pokemonService.listaPokemons = $scope.pokemonService.listaPokemons.map(function (poke) {
         if (treinDel.pokemon.id === poke.id) {
            poke.treinador = "Selvagem";
         }
         return poke;
      });
      $scope.service.listaTreinadores.splice(index, 1);
   };

   $scope.irTelaCadastrar = function () {
      $location.path("/treinador/cadastrar");
   };

   $scope.editar = function (treinador) {
      $scope.service.treinador = treinador;
      $scope.irTelaCadastrar();
   };
}