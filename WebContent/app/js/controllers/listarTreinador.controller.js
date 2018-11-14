angular.module("pokemonApp").controller("listarTreinadorController", listarTreinadorController);

listarTreinadorController.$inject = ["$scope", "$rootScope", "$location", "treinadorService", "pokemonService"];

function listarTreinadorController($scope, $rootScope, $location, treinadorService, pokemonService) {
   var self = this;
   self.service = treinadorService;
   self.pokemonService = pokemonService;
   
   self.deletar = function (index) {
      var treinDel = self.service.listaTreinadores[index];
      self.pokemonService.listaPokemons = self.pokemonService.listaPokemons.map(function (poke) {
         if (treinDel.pokemon.id === poke.id) {
            poke.treinador = "Selvagem";
         }
         return poke;
      });
      self.service.listaTreinadores.splice(index, 1);
   };

   self.irTelaCadastrar = function () {
      $location.path("/treinador/cadastrar");
   };

   self.editar = function (treinador) {
      self.service.treinador = treinador;
      self.irTelaCadastrar();
   };
}