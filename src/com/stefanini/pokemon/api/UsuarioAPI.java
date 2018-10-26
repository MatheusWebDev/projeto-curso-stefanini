package com.stefanini.pokemon.api;

import java.util.List;
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
import com.stefanini.pokemon.service.UsuarioService;

@Path("/usuario")
@Consumes(MediaType.APPLICATION_JSON)
@Produces(MediaType.APPLICATION_JSON)
public class UsuarioAPI extends ApiBase {
	
	@Inject
	private UsuarioService usuarioService;
	
	@GET
	@Path("/{id}")
	public Response obter(@PathParam("id") Long id) {
		UsuarioDTO userDTO = usuarioService.obterUser(id);
		return Response.ok(userDTO).build();
	}
	
	@GET
	public Response listar() {
		List<UsuarioDTO> listaUsuarios = usuarioService.listar();
		return Response.ok(listaUsuarios).build();
	}

	@POST
	public Response cadastrar(UsuarioDTO dto) {
		usuarioService.salvar(dto);
		return Response.ok(dto).build();
	}

	@PUT
	public Response editar(UsuarioDTO dto) {
		usuarioService.editar(dto);
		return Response.ok(dto).build();
	}
	
	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Long id) {		
		usuarioService.deletar(id);
		return Response.ok("Usuário deletado com sucesso.").build();
	}
}
