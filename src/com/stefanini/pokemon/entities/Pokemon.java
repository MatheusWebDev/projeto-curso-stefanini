package com.stefanini.pokemon.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Pokemon", schema = "pokemon")
public class Pokemon extends EntityBase {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@Column
	private Long id;

	@Column
	private String nome;

	@Column
	private Integer vida;

	@Column
	private Integer ataque;

	@Column
	private Integer defesa;

	@Column
	private Integer level;

	private List<Treinador> treinadores;

//	@ManyToOne
//	@JoinColumn(name = "tipoPokemon")
//	private TipoPokemon tipoPokemon;
//
////	@ManyToOne
////	@JoinColumn(name = "tipoPokemonSecundario")
////	private TipoPokemon tipoPokemonSecundario;
////
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
