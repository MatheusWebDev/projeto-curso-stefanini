
angular.module('PokemonModule')
    .controller('PokemonController', PokemonController);

PokemonController.$inject = ['$scope', '$timeout', '$rootScope', 'PokemonService'];

function PokemonController($scope, $timeout, $rootScope, PokemonService) {
    
    var self = this;
    self.service = PokemonService;
    self.mensagemExclusao = "Deseja excluir esse Pokemon?";
    
    self.tipos = [{codigo: 1, descricao: 'Fogo'}, 
    {codigo: 2, descricao: 'Água'}];
    
    self.tipos.forEach(tipo => {
        self.service.pokemons.forEach(pokemon => {
            if (pokemon.tipo === tipo.codigo) {
                pokemon.descricaoTipo = tipo.descricao;
            }
        });
    });

    self.novoPokemon = function () {
        self.pokemon = {};
    }
    
    self.cadastrar = function (pokemon) {
        pokemon.id = self.service.pokemons.length + 1;
        self.service.pokemons.unshift(pokemon);
        self.pokemon = null;
    }
    
    self.excluir = function (index) {
        self.service.pokemons.splice(index, 1);        
    }
    
    self.editar = function (pokemon, index) {
        pokemon.index = index;
        self.pokemon = angular.copy(pokemon);
    }
    
    self.alterar = function (pokemon) {
        var index = pokemon.index;
        delete pokemon.index;
        self.service.pokemons.splice(index, 1, pokemon);
        self.pokemon = null;
    }
    
    self.limpar = function () {
        self.pokemon = null;
    }
    
    self.loading = function() {
        self.carregando = "Carregando...";
        $timeout(function() {
            self.carregando = null;
        }, 1000);
    }
}