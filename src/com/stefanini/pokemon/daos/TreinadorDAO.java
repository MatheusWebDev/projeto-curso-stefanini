package com.stefanini.pokemon.daos;

import java.util.Collections;
import java.util.List;

import com.stefanini.pokemon.entities.Treinador;

public class TreinadorDAO extends GenericDAO<Long, Treinador> {


	public TreinadorDAO(Class<Treinador> entity) {
		super(entity);
		// TODO Auto-generated constructor stub
	}

	public List<Treinador> getTodosTreinadores() {
		return Collections.EMPTY_LIST;
	}

}
