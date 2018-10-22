package com.stefanini.pokemon.dtos;

import java.io.Serializable;

public class UsuarioDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String email;
	private String senha;
	
	
	public UsuarioDTO(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}
	public UsuarioDTO(Long id, String email, String senha) {
		this.id = id;
		this.email = email;
		this.senha = senha;
	}
	public UsuarioDTO() {}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
}
