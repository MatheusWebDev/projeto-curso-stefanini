
angular.module('PokemonModule')
    .controller('CadastrarPokemonController', CadastrarPokemonController);

    CadastrarPokemonController.$inject = ['$scope', '$location', '$rootScope', 'PokemonService', 'Mensagens', 'TipoMensagem', '$http'];

function CadastrarPokemonController($scope, $location, $rootScope, PokemonService, Mensagens, TipoMensagem, $http) {
    
    var self = this;
    self.service = PokemonService;
    self.pokemon = self.service.pokemonSelecionado || {};
    self.tipos = [];

    
    self.init = function () {
        self.listarTipos();
    };
    
    self.listarTipos = function() {
        self.service.listarTipos()
        .then(function(response) {
            self.tipos = response.data;
            console.log(response);
            console.log(self.tipos);
        }, function(error) {
            $rootScope.addMensagem({texto: error.mensagem, tipo: TipoMensagem.SUCCESS}, true, false);
            console.log('error');
        });
    };
    
    self.setTipo = function(pokemon) {
        var tipo = pokemon.tipo;
        delete pokemon.tipo;
        pokemon.tipos = [];
        self.tipos.forEach(tipoTemp => {
            if (tipo.id === tipoTemp.id) {
                pokemon.tipos.push(tipoTemp);
            }
        });
    };
    
    self.cadastrar = function (pokemon) {
        // pokemon.id = self.service.pokemons.length + 1;
        self.setTipo(pokemon);
        // self.service.pokemons.unshift(pokemon);
        // self.pokemon.tipos = [pokemon.tipos.descricao];
        // self.pokemon.tipos = pokemon.tipos;
        self.service.salvar(pokemon)
            .then(function() {
                $rootScope.addMensagem({texto: Mensagens.MENSAGEM_INCLUIR_SUCESSO, tipo: TipoMensagem.SUCCESS}, true, false);
                self.voltar();
            }, function(error) {
                console.log(error);
            });
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