package com.stefanini.pokemon.service;

import javax.inject.Inject;
import javax.ws.rs.NotAuthorizedException;

public class LoginService extends ServiceBase {
	
	private BaseDeDados baseDados;

	@Inject
	public LoginService(BaseDeDados baseDados) {
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
