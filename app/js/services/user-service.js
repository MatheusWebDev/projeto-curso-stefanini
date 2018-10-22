angular.module('PokemonModule')
    .factory('UserService', UserService);

    UserService.$inject = ['$rootScope', '$http'];

    function UserService($rootScope, $http) {
        var _treinadores = [];

        var _cadastrar = function (treinador) {
            return $http.post('http://pokemon.bb.com.br/pokemon/rest/treinador', treinador);
        };

        var _listar = function () {
            return $http.get('http://pokemon.bb.com.br/pokemon/rest/treinador');
        };

        var _excluir = function(id) {
            return $http.delete('http://pokemon.bb.com.br/pokemon/rest/treinador/' + id);
        };
        
        return {
            treinadores: _treinadores,
            cadastrar: _cadastrar,
            listar: _listar,
            excluir: _excluir
        };
    }