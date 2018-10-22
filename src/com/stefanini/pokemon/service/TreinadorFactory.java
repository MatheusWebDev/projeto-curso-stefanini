package com.stefanini.pokemon.service;

import java.util.ArrayList;
import java.util.List;

import com.stefanini.pokemon.entities.Pokemon;
import com.stefanini.pokemon.entities.Treinador;
import com.stefanini.pokemon.entities.Usuario;

public class TreinadorFactory extends AbstractFactory<Treinador> {

	@Override
	public List<Treinador> gerar(List l) {
		List<Treinador> treinadores = new ArrayList<>();
		
		Treinador treinador1 = criar(Long.valueOf(treinadores.size()), "Davide Viana", 		"david", 	"123", l);
		treinadores.add(treinador1);
		Treinador treinador2 = criar(Long.valueOf(treinadores.size()), "Italo Bento", 		"italo", 	"124", l);
		treinadores.add(treinador2);
		Treinador treinador3 = criar(Long.valueOf(treinadores.size()), "Leandro Ferreira", 	"leandro", 	"125", l);
		treinadores.add(treinador3);
		Treinador treinador4 = criar(Long.valueOf(treinadores.size()), "Régis Bittencourt", "regis", 	"126", l);
		treinadores.add(treinador4);
		Treinador treinador5 = criar(Long.valueOf(treinadores.size()), "Warley Moreira", 	"warley", 	"127", l);
		treinadores.add(treinador5);

		
		return treinadores;
	}

	private Treinador criar(Long id, String nome, String username, String senha, List<Pokemon> pokemons) {
		Treinador treinador = new Treinador();
		
		treinador.setId(id);
		treinador.setNome(nome);
		treinador.setIdade(20);
		treinador.setPokemons(pokemons);
		treinador.setUsuario(criar(id, username, senha));
		
		return treinador;
	}
	
	private Usuario criar(Long id, String username, String senha) {
		Usuario usuario = new Usuario();
		
		usuario.setId(id);
		usuario.setSenha(senha);
		usuario.setEmail(username);
		
		return usuario;
	}

	@Override
	public List<Treinador> gerar() {
		// TODO Auto-generated method stub
		return null;
	}

}
