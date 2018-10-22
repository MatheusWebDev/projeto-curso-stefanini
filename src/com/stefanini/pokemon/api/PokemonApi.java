package com.stefanini.pokemon.api;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.stefanini.pokemon.dtos.PokemonDTO;
import com.stefanini.pokemon.service.PokemonService;

@Path("/pokemon")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PokemonApi {

	@Inject
	private PokemonService pokemonService;
			
	@GET
	public Response listar() {
		return Response.ok(pokemonService.listar()).build();
	}
	
	@PUT
	public Response alterar(PokemonDTO pokemon) {
		PokemonDTO pokemonDTO = pokemonService.alterar(pokemon);
		return Response.ok(pokemonDTO).build();
	}
	
	
}
