angular.module('PokemonModule')
.constant('Constantes', {
    MENSAGEM_INCLUIR_SUCESSO: 'Pokemon incluído com sucesso.',
    MENSAGEM_EXCLUIR_SUCESSO: 'Pokemon excluído com sucesso'

}).constant('TipoMensagem', {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    INFO: 'INFO',
    WARNING: 'WARNING'
});