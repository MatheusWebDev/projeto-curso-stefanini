angular.module('PokemonModule')
    .factory('PokemonService', PokemonService);

PokemonService.$inject = ['$rootScope'];

function PokemonService($rootScope) {
    var _pokemons = [
        { id: 1, nome: 'Charmander', tipo: 1, level: 15 },
        { id: 2, nome: 'Squirtle', tipo: 2, level: 10 }
    ];
    
    return {
        pokemons: _pokemons
    }
}