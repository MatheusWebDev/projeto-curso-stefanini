angular.module("pokemonApp").controller("cadastrarPokemonController", cadastrarPokemonController);

cadastrarPokemonController.$inject = ["$scope", "$rootScope", "$location", "pokemonService"];

function cadastrarPokemonController ($scope, $rootScope, $location, pokemonService) {
   $scope.contadorId = 3;
   $scope.service = pokemonService;

   $scope.cadastrar = function (pokemon) {
      if (pokemon.id){
         var index = $scope.service.listaPokemons.findIndex(function (pokemonItem) {
            return pokemonItem.id === pokemon.id;
         });
         $scope.service.listaPokemons.splice(index, 1, pokemon);
      } else {
         pokemon.id = ++$scope.contadorId;
         pokemon.treinador = "Selvagem";
         $scope.service.listaPokemons.push(angular.copy(pokemon));
      }
      $scope.service.pokemon = {};
      $location.path("/pokemons/listar");
   };
}