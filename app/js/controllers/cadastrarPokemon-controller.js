
angular.module('PokemonModule')
    .controller('CadastrarPokemonController', CadastrarPokemonController);

CadastrarPokemonController.$inject = ['$scope', '$location', '$rootScope', 'PokemonService', 'Mensagens', 'TipoMensagem'];

function CadastrarPokemonController($scope, $location, $rootScope, PokemonService, Mensagens, TipoMensagem) {

    var self = this;
    self.service = PokemonService;
    self.pokemon = self.service.pokemonSelecionado || {};

    self.setTipo = function (pokemon) {
        self.service.tipos.forEach(tipo => {
            if (pokemon.tipo === tipo.codigo) {
                pokemon.descricaoTipo = tipo.descricao;
            }
        });
    };

    self.cadastrar = function (pokemon) {
        pokemon.id = self.service.pokemons.length + 1;
        self.setTipo(pokemon);
        self.service.pokemons.unshift(pokemon);
        $rootScope.addMensagem({ texto: Mensagens.MENSAGEM_INCLUIR_SUCESSO, tipo: TipoMensagem.SUCCESS }, true, false);
        self.voltar();
    };


    self.alterar = function (pokemon) {

    	self.service.alterar(pokemon)
            .then(function (response) {
            	$rootScope.addMensagem({ texto: Mensagens.MENSAGEM_ALTERAR_SUCESSO, tipo: TipoMensagem.SUCCESS} , false, true);
            	self.voltar();
            }, function (error) {
            	console.log("Error");
            	$rootScope.addMensagem({ texto: Mensagens.MENSAGEM_ALTERAR_ERROR, tipo: TipoMensagem.ERROR} , false, true);
            });
    };

    self.voltar = function () {
        $location.path('/listar');
    };
}