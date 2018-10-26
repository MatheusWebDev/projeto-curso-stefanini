package com.stefanini.pokemon.api;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.stefanini.pokemon.dtos.UsuarioDTO;
import com.stefanini.pokemon.service.LoginService;

@Path("/login")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LoginApi extends ApiBase {
	
	@Inject
	private LoginService loginService;
	
	@POST
	public Response logar(UsuarioDTO userDTO) {
		
		String emailLogado = loginService.validarUsuario(userDTO.getEmail(), userDTO.getSenha());
		String bemVindo = "Olá " + emailLogado + " Seja Bem Vindo!";
		
		return Response.ok(bemVindo).build();
	}

	@GET
	public Response login() {
		
		return Response.ok("Faça o login").build();
	}

}
