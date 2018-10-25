package com.stefanini.pokemon.entities;

import java.io.Serializable;

public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String email;
	private String senha;
	
	
	public Usuario(String email, String senha) {
		this.email = email;
		this.senha = senha;
	}
	public Usuario(Long id, String email, String senha) {
		this.id = id;
		this.email = email;
		this.senha = senha;
	}
	public Usuario() {}
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
