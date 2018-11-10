angular.module("pokemonApp").controller("cadastrarPokemonController", cadastrarPokemonController);

pokemonController.$inject = ["$scope", "$rootScope", "$location", "pokemonService"];

function pokemonController ($scope, $rootScope, $location, pokemonService) {
   $scope.contadorId = 0;
   $scope.service = pokemonService;
   $scope.pokemon = $scope.service.pokemon; // para nao duplicar -> utilizar service direto

   $scope.inserir = function (pokemon) {
      if (pokemon.id){
         var pokemonAlterado = $scope.service.listaPokemons.filter(function(pokemonItem) {
            if (pokemonItem.id === pokemon.id) {
               return pokemonItem;
            }
         });
         var index = $scope.service.listaPokemons.indexOf(pokemonAlterado[0]);
         $scope.service.listaPokemons.splice(index, 1, pokemon);
      } else {
         pokemon.id = ++$scope.contadorId;
         $scope.service.listaPokemons.push(angular.copy(pokemon));
      }
      $scope.pokemon = {};
      $scope.service.pokemon = {};
      $location.path("/listar");
   };
}