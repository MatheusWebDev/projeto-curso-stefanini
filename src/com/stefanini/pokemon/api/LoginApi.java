package com.stefanini.pokemon.api;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.stefanini.pokemon.dtos.UsuarioDTO;
import com.stefanini.pokemon.entities.Usuario;
import com.stefanini.pokemon.service.LoginService;

@Path("/login")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class LoginApi extends ApiBase {

	@Inject
	private LoginService loginService;
	
	@GET
	@Path("/obter/{id}")
	public Response obter(@PathParam("id") Long id) {
		Usuario user = loginService.obterUser(id);
		UsuarioDTO userDTO = null;
		if (user != null) {
			userDTO = new UsuarioDTO();
			userDTO.setEmail(user.getEmail());
			userDTO.setSenha(user.getSenha());
			userDTO.setId(user.getId());
		}
		return Response.ok(userDTO).build();
	}
	
	@GET
	public Response listar() {
		
		Set<Usuario> listaUsuarios = loginService.listar();
		List<UsuarioDTO> listaUsuariosRetorn = new ArrayList<>();
		
		for( Usuario user : listaUsuarios) {
			UsuarioDTO userDTO = new UsuarioDTO();
			userDTO.setEmail(user.getEmail());
			userDTO.setSenha(user.getSenha());
			userDTO.setId(user.getId());
			listaUsuariosRetorn.add(userDTO);
		}		

		return Response.ok(listaUsuarios).build();
	}

	@POST
	public Response cadastrar(UsuarioDTO dto) {
		loginService.salvar(dto);
		return Response.ok(dto).build();
	}

	@PUT
	public Response editar(UsuarioDTO dto) {
		loginService.editar(dto);
		return Response.ok(dto).build();
	}
	
	@DELETE
	@Path("/delete/{id}")
	public Response deletar(@PathParam("id") Long id) {
		
		Usuario user = loginService.obterUser(id);
		
		loginService.deletar(user);
		return Response.ok(user).build();
	}
}
