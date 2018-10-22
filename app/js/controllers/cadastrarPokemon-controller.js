
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
        var index = pokemon.index;
        delete pokemon.index;

        console.log(pokemon);
        self.service.alterar(pokemon)
            .then(function (response) {
                console.log("Alterando");
            }, function (error) {
                console.log("Erro ao alterar");
            });

        self.service.pokemons.splice(index, 1, pokemon);
        self.service.pokemonSelecionado = null;
        
        $rootScope.addMensagem({ texto: 'Pokemon alterado com sucesso', tipo: TipoMensagem.SUCCESS });
        self.voltar();
    };

    self.voltar = function () {
        $location.path('/listar');
    };
}