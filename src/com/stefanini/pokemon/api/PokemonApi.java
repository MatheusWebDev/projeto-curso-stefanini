package com.stefanini.pokemon.api;

import java.util.Arrays;
import java.util.List;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.stefanini.pokemon.dtos.PokemonDTO;
import com.stefanini.pokemon.entities.TipoPokemon;
import com.stefanini.pokemon.enums.EnumTipoPokemon;
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
	public Response alterar(PokemonDTO pokemon) throws Exception {
		PokemonDTO pokemonDTO = pokemonService.alterar(pokemon);
		return Response.ok(pokemonDTO).build();
	}
	
	@GET
	@Path("/tipos")
	public Response listarTipos() {
		return Response.ok(pokemonService.listarTipos()).build();
	}
	
	@POST
	public Response salvar(PokemonDTO pokemon) {
		PokemonDTO pokemonDTO = pokemonService.incluir(pokemon);
		return Response.ok(pokemonDTO).build();
	}
	
	@DELETE
	public void deletar(PokemonDTO indexPokemonSelecionado) {
		PokemonDTO pokemonDTO;
	}
	
	
//	public static void main(String[] args) {
//		
//		System.out.println(listarTipos());
//		
//	}
	/*
	 * O 'pokemon' vem da service do AngularJS e se torna um DTO.
	 * */
	
	/*@POST
	public Response incluir(TreinadorDTO treinador) {
		TreinadorDTO treinadorDTO = treinadorService.incluir(treinador);
		return Response.ok(treinadorDTO).build();
	}*/

	
}
