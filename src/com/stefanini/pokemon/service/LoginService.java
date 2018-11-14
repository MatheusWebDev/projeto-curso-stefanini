package com.stefanini.pokemon.service;

import javax.inject.Inject;
import javax.ws.rs.NotAuthorizedException;

public class LoginService extends ServiceBase {
	
	private BaseDados baseDados;

	@Inject
	public LoginService(BaseDados baseDados) {
		this.baseDados = baseDados;
	}

	public String validarUsuario(String email, String senha) {
		if(baseDados.checarEmailSenha(email, senha)) {
			return email;//retorna email usuario
		} else {
			throw new NotAuthorizedException("Usuario não encontrado. Faça o login!");
		}
	}
}
