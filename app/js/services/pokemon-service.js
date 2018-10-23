angular.module('PokemonModule')
    .factory('PokemonService', PokemonService);

PokemonService.$inject = ['$rootScope', '$http', 'Mensagens', 'TipoMensagem'];

function PokemonService($rootScope, $http, Mensagens, TipoMensagem) {
    var _pokemons = [
      
    ];

    var _tipos = [];
    /*
    trazer os tipos de pokemons por http.get
    */

    var _pokemonSelecionado;

    var _alterar = function (pokemon) {
        return $http.put('http://pokemon.bb.com.br/pokemon/rest/pokemon', pokemon);
    };

    var _salvar = function(pokemon) {
        return $http.post('http://pokemon.bb.com.br/pokemon/rest/pokemon', pokemon);
    };

    var _listar = function() {
        return $http.get('http://pokemon.bb.com.br/pokemon/rest/pokemon');
    };
    
    

    var _listarTipos = function() {
        return $http.get('http://pokemon.bb.com.br/pokemon/rest/pokemon/tipos');
    };

    var _remover = function(indexPokemonSelecionado) {
        return $http.delete('http://pokemon.bb.com.br/pokemon/rest/pokemon', indexPokemonSelecionado);
    };

    return {
        pokemons: _pokemons,
        tipos: _tipos,
        alterar : _alterar,
        pokemonSelecionado: _pokemonSelecionado,
        salvar: _salvar,
        listar: _listar,
        listarTipos: _listarTipos,
        remover: _remover
    };
}