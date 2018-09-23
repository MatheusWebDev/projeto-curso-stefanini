package com.stefanini.pokemon.api;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;

import com.google.gson.Gson;
import com.stefanini.pokemon.dtos.PokemonDTO;
import com.stefanini.pokemon.parsers.PokemonParserDTO;
import com.stefanini.pokemon.persistence.PersistenceSingleton;

@Path("/pokemon")
public class PokemonApi {

			
	@GET
	public Response listar() {
		Gson gson = new Gson();	
		PersistenceSingleton pers = PersistenceSingleton.getInstance();
		PokemonParserDTO dtoParser = new PokemonParserDTO();
		
		List<PokemonDTO> dtos = dtoParser.toDtoList(pers.getPokemons());
		
		return Response.ok(gson.toJson(dtos)).build();
	}
	
	
}
