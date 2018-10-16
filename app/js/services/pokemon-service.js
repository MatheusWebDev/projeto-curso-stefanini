angular.module('PokemonModule')
    .factory('PokemonService', PokemonService);

PokemonService.$inject = ['$rootScope', '$http', 'Mensagens', 'TipoMensagem'];

function PokemonService($rootScope, $http, Mensagens, TipoMensagem) {
    var _pokemons = [
        /*{id: 1, nome: 'Bulbassaur', tipo: 3, level: 10},
        {id: 2, nome: 'Squirtle', tipo: 2, level: 10},
        {id: 3, nome: 'Charmander', tipo: 1, level: 10}*/
    ];

    var _tipos = [
        { codigo: 1, descricao: "Fogo" },
        { codigo: 2, descricao: "Água" },
        { codigo: 3, descricao: "Planta" }
    ];

    var _pokemonSelecionado;

    var _listar = function() {
        return $http.get('http://pokemon.com/rest/pokemon');
    };

    return {
        pokemons: _pokemons,
        tipos: _tipos,
        pokemonSelecionado: _pokemonSelecionado,
        listar: _listar
    };
}