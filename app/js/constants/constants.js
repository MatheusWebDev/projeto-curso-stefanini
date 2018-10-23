angular.module('PokemonModule')
.constant('Mensagens', {
    MENSAGEM_INCLUIR_SUCESSO: 'Pokemon incluído com sucesso.',
    MENSAGEM_EXCLUIR_SUCESSO: 'Pokemon excluído com sucesso',
    MENSAGEM_ALTERAR_SUCESSO: 'Pokemon alterado com sucesso',
    MENSAGEM_ALTERAR_ERROR: 'Erro ao alterar pokemon',
    MENSAGEM_INCLUIR_TREINADOR_SUCESSO: 'Treinador incluído com sucesso.',
    MENSAGEM_EXCLUIR_TREINADOR_SUCESSO: 'Treinador excluído com sucesso.',
    MENSAGEM_ALTERAR_TREINADOR_SUCESSO: 'Treinador alterado com sucesso.',
    MENSAGEM_LOGIN_SUCESSO: 'Login efetuado com sucesso!',
    MENSAGEM_LOGIN_ERROR: 'Usuário ou senha inválido!'

}).constant('TipoMensagem', {
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    INFO: 'INFO',
    WARNING: 'WARNING'
});