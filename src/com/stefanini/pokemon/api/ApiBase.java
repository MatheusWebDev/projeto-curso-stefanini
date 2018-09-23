package com.stefanini.pokemon.api;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.ws.rs.NotAuthorizedException;
import javax.ws.rs.core.Context;

import com.stefanini.pokemon.dtos.UsuarioDTO;


public class ApiBase {

	@Context
	private HttpServletRequest request;
	
	@Context
	private HttpServletResponse response;
	
	
	protected HttpSession getSession() {
		return request.getSession();
	}
	
	protected UsuarioDTO getUsuario() throws NotAuthorizedException {
		Object user = request.getSession().getAttribute(EnumAttribute.USER.name());
		
		if (user == null) {
			throw new NotAuthorizedException("Autorização negada.");
		}
		
		return (UsuarioDTO) user;
	}
}
