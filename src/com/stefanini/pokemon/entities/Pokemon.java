package com.stefanini.pokemon.entities;

import java.util.List;

public class Pokemon extends EntityBase {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Long id;

	private String nome;

	private Integer vida;

	private Integer ataque;

	private Integer defesa;

	private Integer level;

	private List<Treinador> treinadores;

	private List<TipoPokemon> tipos;
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Integer getVida() {
		return vida;
	}

	public void setVida(Integer vida) {
		this.vida = vida;
	}

	public Integer getAtaque() {
		return ataque;
	}

	public void setAtaque(Integer ataque) {
		this.ataque = ataque;
	}

	public Integer getDefesa() {
		return defesa;
	}

	public void setDefesa(Integer defesa) {
		this.defesa = defesa;
	}

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

//	public TipoPokemon getTipoPokemon() {
//		return tipoPokemon;
//	}
//
//	public void setTipoPokemon(TipoPokemon tipoPokemon) {
//		this.tipoPokemon = tipoPokemon;
//	}
//
//	public TipoPokemon getTipoPokemonSecundario() {
//		return tipoPokemonSecundario;
//	}
//
//	public void setTipoPokemonSecundario(TipoPokemon tipoPokemonSecundario) {
//		this.tipoPokemonSecundario = tipoPokemonSecundario;
//	}

	public List<TipoPokemon> getTipos() {
		return tipos;
	}

	public void setTipos(List<TipoPokemon> tipos) {
		this.tipos = tipos;
	}


}
