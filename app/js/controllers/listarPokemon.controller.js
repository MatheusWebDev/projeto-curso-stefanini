angular.module("pokemonApp").controller("listarPokemonController", listarPokemonController);

listarPokemonController.$inject = ["$scope", "$rootScope", "$location", "pokemonService"];

function listarPokemonController ($scope, $rootScope, $location, pokemonService) {
   $scope.service = pokemonService;
   
   $scope.deletar = function (index) {
      $scope.service.listaPokemons.splice(index, 1);
   };

   $scope.irTelaCadastrar = function () {
      //$scope.service.pokemon = pokemon;
      $location.path("/pokemons/cadastrar");
   };

   $scope.editar = function () {
      $scope.service.pokemon = pokemon;
      $scope.irTelaCadastrar();
   };
}