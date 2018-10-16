package com.stefanini.pokemon.parsers;

import java.util.ArrayList;
import java.util.List;

import com.stefanini.pokemon.dtos.PokemonDTO;
import com.stefanini.pokemon.entities.Pokemon;

public class PokemonParserDTO extends AbstractParser<PokemonDTO, Pokemon>{

	@Override
	public PokemonDTO toDTO(Pokemon entity) {
//		TipoPokemonParserDTO tipoPokemonParser = new TipoPokemonParserDTO();
		
		PokemonDTO dto = new PokemonDTO();
		dto.setAtaque(entity.getAtaque());
		dto.setDefesa(entity.getDefesa());
		dto.setId(entity.getId());
		dto.setLevel(entity.getLevel());
		dto.setNome(entity.getNome());
		dto.setTipos(entity.getTipos());
		dto.setVida(entity.getVida());
//		dto.setTipoPokemon(tipoPokemonParser.toDTO(entity.getTipoPokemon()));
//		dto.setTipoPokemonSecundario(tipoPokemonParser.toDTO(entity.getTipoPokemonSecundario()));
		
		return dto;
	}

	@Override
	public Pokemon toEntity(PokemonDTO dto) {
//		TipoPokemonParserDTO tipoPokemonParser = new TipoPokemonParserDTO();
		
		Pokemon pokemon = new Pokemon();
		pokemon.setAtaque(dto.getAtaque());
		pokemon.setDefesa(dto.getDefesa());
		pokemon.setId(dto.getId());
		pokemon.setLevel(dto.getLevel());
		pokemon.setNome(dto.getNome());
		pokemon.setTipos(dto.getTipos());
		pokemon.setVida(dto.getVida());
//		pokemon.setTipoPokemon(tipoPokemonParser.toEntity(dto.getTipoPokemon()));
//		pokemon.setTipoPokemonSecundario(tipoPokemonParser.toEntity(dto.getTipoPokemonSecundario()));
		
		return pokemon;
	}
	
	public List<PokemonDTO> toDtoList(List<Pokemon> pokemons){
		if(pokemons == null) {
			return null;
		}
		ArrayList<PokemonDTO> dtos = new ArrayList<>();
		
		for(Pokemon each : pokemons) {
			dtos.add(this.toDTO(each));
		}
		
		return dtos;
	}

	public List<Pokemon> toEntityList(List<PokemonDTO> pokemons) {
		if(pokemons == null) {
			return null;
		}
		ArrayList<Pokemon> entities= new ArrayList<>();
		
		for(PokemonDTO each : pokemons) {
			entities.add(this.toEntity(each));
		}
		
		return entities;
	}
	
}
