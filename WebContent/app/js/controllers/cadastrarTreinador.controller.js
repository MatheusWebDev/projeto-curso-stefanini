angular.module("pokemonApp").controller("cadastrarTreinadorController", cadastrarTreinadorController);

cadastrarTreinadorController.$inject = ["$scope", "$rootScope", "$location", "treinadorService", "pokemonService"];

function cadastrarTreinadorController ($scope, $rootScope, $location, treinadorService, pokemonService) {
   var self = this;
   self.contadorId = 1;
   self.service = treinadorService;
   self.pokemonService = pokemonService;

   self.cadastrar = function (treinador) {
      if (treinador.id){
         var index = self.service.listaTreinadores.findIndex(function(treinadorItem) {
            return treinadorItem.id === treinador.id;
         });
         self.service.listaTreinadores.splice(index, 1, treinador);
      } else {
         treinador.id = ++self.contadorId;
         self.pokemonService.listaPokemons = self.pokemonService.listaPokemons.map(function(poke) {
            if (poke.id === treinador.pokemon.id) {
               poke.treinador = treinador.nome;
            }
            return poke;
         });
         self.service.listaTreinadores.push(angular.copy(treinador));
      }
      self.service.treinador = {};
      $location.path("/treinador/listar");
   };
}