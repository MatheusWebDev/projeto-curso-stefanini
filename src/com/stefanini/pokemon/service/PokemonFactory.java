package com.stefanini.pokemon.service;

import java.util.ArrayList;
import java.util.List;

import com.stefanini.pokemon.entities.Pokemon;
import com.stefanini.pokemon.entities.TipoPokemon;
import com.stefanini.pokemon.enums.EnumTipoPokemon;

public class PokemonFactory extends AbstractFactory<Pokemon> {

	@Override
	public List<Pokemon> gerar() {
		List<Pokemon> pokemons = new ArrayList<>();
		
		Pokemon pokemon1 = criar(Long.valueOf(pokemons.size()), "Bulbassaur", EnumTipoPokemon.PLANTA);
		pokemons.add(pokemon1);
		Pokemon pokemon2 = criar(Long.valueOf(pokemons.size()), "Squirtle", EnumTipoPokemon.AGUA);
		pokemons.add(pokemon2);
		Pokemon pokemon3 = criar(Long.valueOf(pokemons.size()), "Charmander", EnumTipoPokemon.FOGO);
		pokemons.add(pokemon3);
		Pokemon pokemon4 = criar(Long.valueOf(pokemons.size()), "Pikachu", EnumTipoPokemon.RAIO);
		pokemons.add(pokemon4);
		Pokemon pokemon5 = criar(Long.valueOf(pokemons.size()), "Pigey", EnumTipoPokemon.VOADOR, EnumTipoPokemon.NORMAL);
		pokemons.add(pokemon5);
		
		return pokemons;
	}

	private Pokemon criar(Long id, String nome, EnumTipoPokemon... eTipoPokemon) {
		Pokemon pokemon = new Pokemon();
		
		pokemon.setId(id);
		pokemon.setNome(nome);
		pokemon.setAtaque((int)(Math.random() * 3) + 1);
		pokemon.setDefesa((int)(Math.random() * 2) + 1);
		pokemon.setLevel(1);
		pokemon.setVida((100 + (int)(Math.random() * 10) + 1));
		pokemon.setTipos(new ArrayList<TipoPokemon>());
		
		for (EnumTipoPokemon e : eTipoPokemon) {
			pokemon.getTipos().add(criar(e));
		}
		
		return pokemon;
	}
	
	private TipoPokemon criar(EnumTipoPokemon eTipoPokemon) {
		TipoPokemon tipoPokemon = new TipoPokemon(null, null);
		tipoPokemon.setId(Integer.valueOf(eTipoPokemon.getCodigo()));
		tipoPokemon.setDescricao(eTipoPokemon.getDescricao());
		
		return tipoPokemon;
	}

	@Override
	List<Pokemon> gerar(List l) {
		return null;
	}

}
