angular.module("pokemonApp").controller("listarPokemonController", listarPokemonController);

listarPokemonController.$inject = ["$scope", "$rootScope", "$location", "pokemonService", "treinadorService"];

function listarPokemonController ($scope, $rootScope, $location, pokemonService, treinadorService) {
   var self = this;
   self.service = pokemonService;
   self.treinadorService = treinadorService;
   self.indexSelecionado= null;
   
   self.deletar = function (index) {
      var pokeDel = self.service.listaPokemons[index];
      if (pokeDel.treinador != "Selvagem") {
         self.treinadorService.listaTreinadores = self.treinadorService.listaTreinadores.map(function(trein) {
            if (trein.nome === pokeDel.treinador) {
               trein.pokemon = {nome: "Nenhum"};
            }
            return trein;
         });
      }
      self.service.listaPokemons.splice(index, 1);
   };

   self.irTelaCadastrar = function () {
      $location.path("/pokemons/cadastrar");
   };

   self.editar = function (pokemon) {
      self.service.pokemon = pokemon;
      self.irTelaCadastrar();
   };
}