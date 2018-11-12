angular.module("pokemonApp").controller("cadastrarPokemonController", cadastrarPokemonController);

cadastrarPokemonController.$inject = ["$scope", "$rootScope", "$location", "pokemonService"];

function cadastrarPokemonController ($scope, $rootScope, $location, pokemonService) {
   $scope.contadorId = 3;
   $scope.service = pokemonService;

   $scope.cadastrar = function (pokemon) {
      if (pokemon.id){
         var pokemonAlterar = $scope.service.listaPokemons.filter(function(pokemonItem) {
            if (pokemonItem.id === pokemon.id) {
               return pokemonItem;
            }
         });
         var index = $scope.service.listaPokemons.indexOf(pokemonAlterar[0]);
         $scope.service.listaPokemons.splice(index, 1, pokemon);
      } else {
         pokemon.id = ++$scope.contadorId;
         pokemon.treinador = "Selvagem";
         $scope.service.listaPokemons.push(angular.copy(pokemon));
      }
      //$scope.pokemon = {};
      $scope.service.pokemon = {};
      $location.path("/pokemons/listar");
   };
}