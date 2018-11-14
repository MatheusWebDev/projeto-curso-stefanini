angular.module("pokemonApp").controller("cadastrarPokemonController", cadastrarPokemonController);

cadastrarPokemonController.$inject = ["$scope", "$rootScope", "$location", "pokemonService"];

function cadastrarPokemonController($scope, $rootScope, $location, pokemonService) {
   var self = this;
   self.contadorId = 3;
   self.service = pokemonService;

   self.cadastrar = function (pokemon) {
      if (pokemon.id){
         self.service.alterar(pokemon)
         .then(function(response) {
             console.log(response.data);
             
         }, function(error) {
             console.log(error);
         });
      } else {
         self.service.cadastrar(pokemon)
         .then(function(response) {
             console.log(response.data);
         }, function(error) {
             console.log(error);
         });
      }
      self.service.pokemon = {};
      $location.path("/pokemons/listar");
   };
}