package com.stefanini.pokemon.api;

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

import com.stefanini.pokemon.dtos.TreinadorDTO;
import com.stefanini.pokemon.service.TreinadorService;

@Path("/treinador")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TreinadorApi {

	@Inject
	private TreinadorService treinadorService;
	
	@POST
	public Response incluir(TreinadorDTO treinador) {
		TreinadorDTO treinadorDTO = treinadorService.incluir(treinador);
		return Response.ok(treinadorDTO).build();
	}

	@PUT
	public Response alterar(TreinadorDTO treinador) {
		TreinadorDTO treinadorDTO = treinadorService.alterar(treinador);
		return Response.ok(treinadorDTO).build();
	}

	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Long id) {
		treinadorService.excluir(id);
		return Response.ok().build();
	}

	@GET
	public Response listar() {
		return Response.ok(this.treinadorService.listar()).build();
	}
	

	@GET
	@Path("/{id}")
	public Response obter(@PathParam("id") Long id) {
		return Response.ok(treinadorService.obter(id)).build();
		
	}

}
