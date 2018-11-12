angular.module("pokemonApp").controller("cadastrarTreinadorController", cadastrarTreinadorController);

cadastrarTreinadorController.$inject = ["$scope", "$rootScope", "$location", "treinadorService", "pokemonService"];

function cadastrarTreinadorController ($scope, $rootScope, $location, treinadorService, pokemonService) {
   $scope.contadorId = 1;
   $scope.service = treinadorService;
   $scope.pokemonService = pokemonService;

   $scope.cadastrar = function (treinador) {
      if (treinador.id){
         var index = $scope.service.listaTreinadores.findIndex(function(treinadorItem) {
            return treinadorItem.id === treinador.id;
         });
         $scope.service.listaTreinadores.splice(index, 1, treinador);
      } else {
         treinador.id = ++$scope.contadorId;
         $scope.pokemonService.listaPokemons = $scope.pokemonService.listaPokemons.map(function(poke) {
            if (poke.id === treinador.pokemon.id) {
               poke.treinador = treinador.nome;
            }
            return poke;
         });
         $scope.service.listaTreinadores.push(angular.copy(treinador));
      }
      $scope.service.treinador = {};
      $location.path("/treinador/listar");
   };
}