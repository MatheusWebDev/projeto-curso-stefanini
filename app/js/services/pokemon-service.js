angular.module('PokemonModule')
    .factory('PokemonService', PokemonService);

PokemonService.$inject = ['$rootScope', '$http', 'Mensagens', 'TipoMensagem'];

function PokemonService($rootScope, $http, Mensagens, TipoMensagem) {
    var _pokemons = [
      
    ];

    var _tipos = [{
            codigo: 1,
            descricao: "Fogo"
        },
        {
            codigo: 2,
            descricao: "Água"
        },
        {
            codigo: 3,
            descricao: "Planta"
        }
    ];

    var _pokemonSelecionado;

    var _alterar = function (pokemon) {
        return $http.put('http://pokemon.bb.com.br/pokemon/rest/pokemon', pokemon);
    };
    
    var _listar = function () {
        return $http.get('http://pokemon.bb.com.br/pokemon/rest/pokemon');
    };
    
    

    return {
        pokemons: _pokemons,
        tipos: _tipos,
        alterar : _alterar,
        pokemonSelecionado: _pokemonSelecionado,
        listar: _listar
    };
}