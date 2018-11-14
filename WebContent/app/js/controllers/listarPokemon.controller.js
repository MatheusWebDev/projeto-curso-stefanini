angular.module("pokemonApp").controller("listarPokemonController", listarPokemonController);

listarPokemonController.$inject = ["$scope", "$rootScope", "$location", "pokemonService", "treinadorService"];

function listarPokemonController ($scope, $rootScope, $location, pokemonService, treinadorService) {
   var self = this;
   self.service = pokemonService;
   self.treinadorService = treinadorService;
   self.idSelecionado = null;

   self.init = function() {
       self.listar();
   };
   
   self.excluir = function(id) {
      self.service.excluir(id)
      .then(function(response) {
          console.log("Excluido com sucesso");
          self.listar();
      }, function(error) {
          console.log(error);
      });

      self.idSelecionado = null;
   };
   
   self.obter = function(id) {
      self.service.obter(id)
      .then(function(response) {
          self.pokemon = response.data;
      }, function(error) {
          console.log(error);
      });
  };

   self.irTelaCadastrar = function () {
      $location.path("/pokemons/cadastrar");
   };

   self.editar = function (pokemon) {
      self.service.pokemon = pokemon;
      self.irTelaCadastrar();
   };

   self.listar = function() {
      self.service.listar()
          .then(function(response) {
              self.service.listaPokemons = response.data;
          }, function(error) {
             console.log("Retornou erro");
             console.log(error);
          });
  };
}