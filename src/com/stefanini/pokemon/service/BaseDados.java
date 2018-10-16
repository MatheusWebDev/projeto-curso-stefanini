package com.stefanini.pokemon.service;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.inject.Singleton;

import com.stefanini.pokemon.entities.Pokemon;
import com.stefanini.pokemon.entities.TipoPokemon;
import com.stefanini.pokemon.entities.Treinador;
import com.stefanini.pokemon.entities.Usuario;

@Singleton
public class BaseDados {

	private List<Treinador> treinadores = new ArrayList<>();
	private List<Pokemon> pokemons = new ArrayList<>();
	
	@PostConstruct
	public void init() {
		Treinador treinador = new Treinador();
		Usuario usuario = new Usuario();
		usuario.setEmail("email@email.com");
		usuario.setId(1l);
		usuario.setSenha("123");
		treinador.setUsuario(usuario);
		treinador.setNome("David");
		treinador.setIdade(10);
		ArrayList<Pokemon> pokemons = new ArrayList<Pokemon>();
		Pokemon pokemon = new Pokemon();
		ArrayList<TipoPokemon> tipos = new ArrayList<TipoPokemon>();
		TipoPokemon tipoPokemon = new TipoPokemon();
		tipoPokemon.setId(1l);
		tipoPokemon.setNome("Fogo");
		tipos.add(tipoPokemon);
		pokemon.setTipos(tipos);
		pokemon.setAtaque(10);
		pokemon.setDefesa(10);
		pokemon.setLevel(10);
		pokemon.setVida(100);
		pokemon.setNome("Charmander");
		pokemon.setId(1l);
		pokemons.add(pokemon);
		this.pokemons.add(pokemon);
		treinador.setPokemons(pokemons);
		treinador.setId(1l);
		treinadores.add(treinador);
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
