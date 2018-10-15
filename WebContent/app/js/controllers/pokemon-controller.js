
angular.module('PokemonModule')
    .controller('PokemonController', PokemonController);

PokemonController.$inject = ['$scope', '$timeout', '$rootScope', 'PokemonService', 'Constantes', 'TipoMensagem'];

function PokemonController($scope, $timeout, $rootScope, PokemonService, Constantes, TipoMensagem) {
    
    var self = this;
    self.service = PokemonService;

    self.init = function() {
        
    };

    
    self.novoPokemon = function () {
        self.pokemon = {};
    };
    
    self.setTipo = function(pokemon) {
        
    };

    self.cadastrar = function (pokemon) {
        pokemon.id = self.service.pokemons.length + 1;
        self.setTipo(pokemon);
        self.service.pokemons.unshift(pokemon);
        self.pokemon = null;
        $rootScope.addMensagem({texto: Constantes.MENSAGEM_INCLUIR_SUCESSO, tipo: TipoMensagem.SUCCESS}, true, false);
    };

    self.excluir = function (index) {
        self.service.pokemons.splice(index, 1);
        $rootScope.limparMensagens();
        $rootScope.addMensagem({texto: Constantes.MENSAGEM_EXCLUIR_SUCESSO, tipo: TipoMensagem.SUCCESS}, false, true);        
    };
    
    self.editar = function (pokemon, index) {
        pokemon.index = index;
        self.pokemon = angular.copy(pokemon);
    };
    
    self.alterar = function (pokemon) {
        var index = pokemon.index;
        delete pokemon.index;
        self.service.pokemons.splice(index, 1, pokemon);
        self.pokemon = null;
        $rootScope.limparMensagens();
        $rootScope.mensagens.push({texto: 'Pokemon alterado com sucesso', tipo: TipoMensagem.SUCCESS});
    };
    
    self.limpar = function () {
        self.pokemon = null;
    };
    
    self.loading = function() {
        self.carregando = "Carregando...";
        $timeout(function() {
            self.carregando = null;
        }, 1000);
    };
}