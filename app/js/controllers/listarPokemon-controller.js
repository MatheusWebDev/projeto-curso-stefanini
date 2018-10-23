
angular.module('PokemonModule')
    .controller('ListarPokemonController', ListarPokemonController);

ListarPokemonController.$inject = ['$scope', '$rootScope', '$location', 'PokemonService', 'Mensagens', 'TipoMensagem'];

function ListarPokemonController($scope, $rootScope, $location, PokemonService, Mensagens, TipoMensagem) {

    var self = this;
    self.service = PokemonService;

    self.init = function () {
        self.listar();
    };

    self.listar = function () {
        self.service.listar()
            .then(function (response) {
                self.service.pokemons = response.data;
                
            }, function (error) {
                $rootScope.addMensagem({ texto: error.mensagem, tipo: TipoMensagem.SUCCESS }, true, false);
            });
    };

    self.novoPokemon = function () {
        $location.path("/cadastrar");
    };

    self.editar = function (pokemon, index) {
        pokemon.index = index;
        self.service.pokemonSelecionado = pokemon;
        $location.path("/cadastrar");
    };

    self.excluir = function (index) {
        self.service.pokemons.splice(index, 1);
        $rootScope.limparMensagens();
        $rootScope.addMensagem({ texto: Mensagens.MENSAGEM_EXCLUIR_SUCESSO, tipo: TipoMensagem.SUCCESS }, false, true);
    };

}