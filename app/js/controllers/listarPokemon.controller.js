angular.module("pokemonApp").controller("listarPokemonController", listarPokemonController);

listarPokemonController.$inject = ["$scope", "$rootScope", "$location", "pokemonService"];

function listarPokemonController ($scope, $rootScope, pokemonService, $location) {
   $scope.service = pokemonService;

   
   $scope.deletar = function (index) {
      $scope.service.listaPokemons.splice(index, 1);
   };

   $scope.cadastrar = function () {
      $scope.service.pokemon = pokemon;
      $location.path("/cadastrar");
   };

   $scope.editar = function () {
      $scope.service.pokemon = pokemon;
      $scope.irTelaCadastrar();
   };
}