angular.module("pokemonApp").controller("listarPokemonController", listarPokemonController);

listarPokemonController.$inject = ["$scope", "$rootScope", "$location", "pokemonService", "treinadorService"];

function listarPokemonController ($scope, $rootScope, $location, pokemonService, treinadorService) {
   $scope.service = pokemonService;
   $scope.treinadorService = treinadorService;
   
   $scope.deletar = function (index) {
      var pokeDel = $scope.service.listaPokemons[index];
      if (pokeDel.treinador != "Selvagem") {
         $scope.treinadorService.listaTreinadores = $scope.treinadorService.listaTreinadores.map(function(trein) {
            if (trein.nome === pokeDel.treinador) {
               trein.pokemon = {nome: "Nenhum"};
            }
            return trein;
         });
      }
      $scope.service.listaPokemons.splice(index, 1);
   };

   $scope.irTelaCadastrar = function () {
      $location.path("/pokemons/cadastrar");
   };

   $scope.editar = function (pokemon) {
      $scope.service.pokemon = pokemon;
      $scope.irTelaCadastrar();
   };
}