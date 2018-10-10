angular.module('PokemonModule')
    .factory('PokemonService', PokemonService);

PokemonService.$inject = ['$rootScope'];

function PokemonService($rootScope) {
    var _pokemons = [
        { id: 1, nome: 'Charmander', tipo: 1, level: 15 },
        { id: 2, nome: 'Squirtle', tipo: 2, level: 10 }
    ];

    var _tipos = [
        {codigo: 1, descricao: "Fogo"},
        {codigo: 2, descricao: "Água"},
        {codigo: 3, descricao: "Planta"}
    ];


    $rootScope.$on('CADASTRAR_POKEMON', function() {
        console.log('Factory.$rootScope.emit');
    });

    $rootScope.$on('CADASTRAR_POKEMON2', function() {
        console.log('Factory.$rootScope.broadcast');
    });

    $rootScope.$on('CADASTRAR_POKEMON3', function() {
        console.log('Factory.$scope.broadcast');
    });

    return {
        pokemons: _pokemons,
        tipos: _tipos
    }
}