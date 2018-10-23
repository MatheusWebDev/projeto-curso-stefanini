package com.stefanini.pokemon.enums;

import java.util.ArrayList;
import java.util.List;

import com.stefanini.pokemon.dtos.TipoPokemonDTO;
import com.stefanini.pokemon.entities.TipoPokemon;

public enum EnumTipoPokemon {

	FOGO 	(1, "Fogo"),
	AGUA 	(2, "Água"),
	PLANTA 	(3, "Planta"),
	PEDRA 	(4, "Pedra"),
	AREIA 	(5, "Areia"),
	VOADOR 	(6, "Voador"),
	NORMAL 	(7, "Normal"),
	LUTADOR (8, "Lutador"),
	RAIO 	(9, "Raio"),
	PSIQUICO (10, "Psiquico"),
	FANTASMA (11, "Fantasma");
	
	private Integer codigo;
	private String descricao;
	
	private EnumTipoPokemon(Integer codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}
	
	public Integer getCodigo() {
		return codigo;
	}
	
	public String getDescricao() {
		return descricao;
	}
	
	public List<TipoPokemon> getTipos() {
		List<TipoPokemon> tipos = new ArrayList<>();
		for (EnumTipoPokemon eTipoPokemon : EnumTipoPokemon.values()) {
			tipos.add(new TipoPokemon(eTipoPokemon.getCodigo(), eTipoPokemon.getDescricao()));
		}
		return tipos;
	}
	
	private TipoPokemon criar(EnumTipoPokemon eTipoPokemon) {
		TipoPokemon tipoPokemon = new TipoPokemon(codigo, descricao);
		tipoPokemon.setId(Integer.valueOf(eTipoPokemon.getCodigo()));
		tipoPokemon.setDescricao(eTipoPokemon.getDescricao());
		
		return tipoPokemon;
	}
	
	
}
