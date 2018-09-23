package com.stefanini.pokemon.daos;

import com.stefanini.pokemon.entities.Treinador;

public class TreinadorDAO extends GenericDAO<Long, Treinador> {


	public TreinadorDAO(Class<Treinador> entity) {
		super(Treinador.class);
	}

	public Treinador incluir(Treinador treinador) {
		//incluir
		return new Treinador();
	}
	
	public Treinador alterar(Treinador treinador) {
		//alterar
		return new Treinador();
	}
	
	public Treinador excluir(Long id) {
		//excluir
		return new Treinador();
	}

	public Treinador obter(Long id) {
		//obter
		return new Treinador();
	}
	
}
