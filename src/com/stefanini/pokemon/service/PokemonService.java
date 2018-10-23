package com.stefanini.pokemon.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import com.stefanini.pokemon.dtos.PokemonDTO;
import com.stefanini.pokemon.dtos.TipoPokemonDTO;
import com.stefanini.pokemon.entities.Pokemon;
import com.stefanini.pokemon.entities.TipoPokemon;
import com.stefanini.pokemon.enums.EnumTipoPokemon;
import com.stefanini.pokemon.parsers.PokemonParserDTO;
import com.stefanini.pokemon.parsers.TipoPokemonParserDTO;
import com.stefanini.pokemon.persistence.BaseDados;

public class PokemonService extends ServiceBase {
	
	@Inject
	private BaseDados baseDados;
	
	
	private List<TipoPokemon> getTipos() {
		List<TipoPokemon> tipos = new ArrayList<>();
		for (EnumTipoPokemon eTipoPokemon : EnumTipoPokemon.values()) {
			tipos.add(new TipoPokemon(eTipoPokemon.getCodigo(), eTipoPokemon.getDescricao()));
		}
		return tipos;
	}
		
	private PokemonParserDTO pokemonParserDTO = new PokemonParserDTO();
	
	private TipoPokemonParserDTO tipoPokemonParserDTO = new TipoPokemonParserDTO();
	
	public PokemonDTO incluir(PokemonDTO dto) {
		Pokemon pokemon = pokemonParserDTO.toEntity(dto); //linha incluída
		
		baseDados.addPokemon(pokemon);
		return pokemonParserDTO.toDTO(pokemon);
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
	
	public List<PokemonDTO> listar() {//
		return pokemonParserDTO.toDTO(baseDados.getPokemons());
	}

	public List<TipoPokemonDTO> listarTipos() {
		return tipoPokemonParserDTO.toDTO(getTipos());
	}
	
//	public static void main(String[] args) {
//		List<TipoPokemon> l = getTipos();
//		for (TipoPokemon tipoPokemon : l) {
//			System.out.println(tipoPokemon.getNome());
//		}
//		
//	}
	
//	//Criar listar tipos
//	public List<TipoPokemon> listarTipos(){
//		PokemonParserDTO tipoPokemonParseDTO;
//		tipoPokemonParseDTO.toDtoList(TipoPokemon);
//	}
//	
}
