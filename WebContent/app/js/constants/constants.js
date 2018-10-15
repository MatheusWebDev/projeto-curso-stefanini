angular.module('PokemonModule')
.constant('Constantes', {
    MENSAGEM_INCLUIR_SUCESSO: 'Pokemon incluído com sucesso.',
    MENSAGEM_EXCLUIR_SUCESSO: 'Pokemon excluído com sucesso',
    LOGIN_SUCESSO: 'Login efetuado com sucesso!',
    LOGIN_ERROR: 'Usuário ou senha inválido!'

}).constant('TipoMensagem', {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    INFO: 'INFO',
    WARNING: 'WARNING'
});