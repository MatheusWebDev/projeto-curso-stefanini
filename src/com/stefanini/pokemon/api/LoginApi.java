package com.stefanini.pokemon.api;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import com.stefanini.pokemon.dtos.UsuarioDTO;

@Path("/usuario")
public class LoginApi extends ApiBase {

	@GET
	public Response obterUsuario() {
		return Response.ok(getUsuario()).build();
	}
	
	@POST
	public Response login(UsuarioDTO usuarioDTO) {
		//TODO validar dados do usuário
		
		getSession().setAttribute(EnumAttribute.USER.name(), usuarioDTO);
		return Response.ok(usuarioDTO).build();
	}
	
}
