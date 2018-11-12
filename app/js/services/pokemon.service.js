angular.module("pokemonApp")
   .factory("pokemonService", pokemonService);

   pokemonService.$inject = [];

   function pokemonService() {
      var _pokemon = {};

      var _listaPokemons = [
         {id: 1, nome: "Pikachu", tipo: {cod: 5, descricao: "Eletrico"}, treinador: "Matheus"},
         {id: 2, nome: "Bulbasaur", tipo: {cod: 3, descricao: "Grama"}, treinador: "Selvagem"},
         {id: 3, nome: "Charmander", tipo: {cod: 1, descricao: "Fogo"}, treinador: "Selvagem"},
         {id: 4, nome: "Squirtle", tipo: {cod: 2, descricao: "Agua"}, treinador: "Selvagem"}
      ];

      var _listaTipos = [
         {cod: 1, descricao: "Fogo"},
         {cod: 2, descricao: "Agua"},
         {cod: 3, descricao: "Grama"},
         {cod: 4, descricao: "Pedra"},
         {cod: 5, descricao: "Eletrico"},
         {cod: 6, descricao: "Terrestre"}
      ];

      return {
         listaPokemons: _listaPokemons,
         listaTipos: _listaTipos,
         pokemon: _pokemon
      };
   }