angular.module("pokemonApp", []);

angular.module("pokemonApp").controller("pokemonController", pokemonController);

pokemonController.$inject = ["$scope", "$rootScope"];

function pokemonController ($scope, $rootScope) {
   $scope.contadorId = 0;
   $scope.tiposPokemons = [
      {cod: 1, descricao: "Fogo"},
      {cod: 2, descricao: "Agua"},
      {cod: 3, descricao: "Grama"},
      {cod: 4, descricao: "Pedra"},
      {cod: 5, descricao: "Eletrico"},
      {cod: 6, descricao: "Terrestre"}
   ];
   $scope.listaPokemons = [];
   $scope.pokemon = {};
   $scope.showForm = false;

   $scope.inserir = function (pokemon) {
      if (pokemon.id){
         var pokemonAlterado = $scope.listaPokemons.filter(function(pokemonItem) {
            if (pokemonItem.id === pokemon.id) {
               return pokemonItem;
            }
         });
         var index = $scope.listaPokemons.indexOf(pokemonAlterado[0]);
         $scope.listaPokemons.splice(index, 1, pokemon);
      } else {
         pokemon.id = ++$scope.contadorId;
         $scope.listaPokemons.push(angular.copy(pokemon));
      }
      $scope.pokemon = {};
   };

   $scope.deletar = function (index) {
      $scope.listaPokemons.splice(index, 1);
   }

   $scope.editar = function (pokemon) {
      $scope.pokemon = angular.copy(pokemon);
      $scope.showForm = true;
   }
};