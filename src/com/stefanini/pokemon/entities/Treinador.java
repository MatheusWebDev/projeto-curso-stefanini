package com.stefanini.pokemon.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Treinador", schema = "pokemon")
public class Treinador extends EntityBase {

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
	private Integer idade;

	@OneToOne
	private Usuario usuario;

	@ManyToMany
	@JoinTable(name = "TreinadorPokemon", 
			joinColumns = { @JoinColumn(name = "idTreinador") }, 
			inverseJoinColumns = { @JoinColumn(name = "idPokemon") })
	private List<Pokemon> pokemons;

	public Integer getIdade() {
		return idade;
	}

	public void setIdade(Integer idade) {
		this.idade = idade;
	}

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

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public List<Pokemon> getPokemons() {
		return pokemons;
	}

	public void setPokemons(List<Pokemon> pokemons) {
		this.pokemons = pokemons;
	}

}
