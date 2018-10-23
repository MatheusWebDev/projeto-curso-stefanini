package com.stefanini.pokemon.service;

import java.util.List;

import javax.inject.Inject;

import com.stefanini.pokemon.dtos.PokemonDTO;
import com.stefanini.pokemon.entities.Pokemon;
import com.stefanini.pokemon.parsers.PokemonParserDTO;
import com.stefanini.pokemon.persistence.BaseDados;

public class PokemonService extends ServiceBase {

	@Inject
	private BaseDados baseDados;
	
	private PokemonParserDTO pokemonParserDTO = new PokemonParserDTO();
	
	
	public PokemonDTO incluir(PokemonDTO dto) {
		return dto;
	}
	
	public PokemonDTO alterar(PokemonDTO dto) throws Exception {
		Pokemon pokemon = pokemonParserDTO.toEntity(dto);
		
		for(Pokemon t: baseDados.getPokemons()) {
			if(t.getId().equals(pokemon.getId())) {
				baseDados.deletePokemon(t);
				baseDados.addPokemon(pokemon);
				break;
			}
		}
		
		return pokemonParserDTO.toDTO(pokemon);
	}
	
	public void excluir(PokemonDTO dto) {
		excluir(dto.getId());
	}
	
	public void excluir(Long id) {
		//treinadorDAO.excluir(id);
	}
	
	public PokemonDTO obter(Long id) {
		Pokemon pokemon = new Pokemon();//treinadorDAO.obter(id);
		return pokemonParserDTO.toDTO(pokemon);
	}
	
	public List<PokemonDTO> listar() {
		return pokemonParserDTO.toDTO(baseDados.getPokemons());
	}
	
}
