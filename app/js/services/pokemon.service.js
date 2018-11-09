angular.module("pokemonApp")
   .factory("pokemonService", pokemonService);

   pokemonService.$inject = [];

   function pokemonService() {
      var _pokemon = {};

      var _listaPokemons = [{nome: "pikachu", tipo: {cod: 5, descricao: "Eletrico"}}];

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