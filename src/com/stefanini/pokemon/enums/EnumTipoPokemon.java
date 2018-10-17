package com.stefanini.pokemon.enums;

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
	
}
