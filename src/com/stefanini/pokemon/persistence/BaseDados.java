package com.stefanini.pokemon.persistence;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Singleton;

import com.stefanini.pokemon.entities.Pokemon;
import com.stefanini.pokemon.entities.Treinador;
import com.stefanini.pokemon.service.PokemonFactory;
import com.stefanini.pokemon.service.TreinadorFactory;

@Singleton
public class BaseDados {

	@Inject
	private TreinadorFactory treinadorFactory;
	
	@Inject
	private PokemonFactory pokemonFactory;
	
	private List<Treinador> treinadores = new ArrayList<>();
	private List<Pokemon> pokemons = new ArrayList<>();
	
	@PostConstruct
	public void init() {
		pokemons.addAll(pokemonFactory.gerar());
		treinadores.addAll(treinadorFactory.gerar(pokemons));
	}
	
	public List<Pokemon> getPokemons() {
		return pokemons;
	}
	
	public void setPokemons(List<Pokemon> pokemons) {
		this.pokemons = pokemons;
	}
	
	public List<Treinador> getTreinadores() {
		return treinadores;
	}
	
	public void setTreinadores(List<Treinador> treinadores) {
		this.treinadores = treinadores;
	}
}
