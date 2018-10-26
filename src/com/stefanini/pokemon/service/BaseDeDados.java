package com.stefanini.pokemon.service;

import java.util.HashSet;
import java.util.Set;

import javax.inject.Singleton;

import com.stefanini.pokemon.entities.Usuario;

@Singleton
public class BaseDeDados {
	
	Set<Usuario> listaUsuarios = new HashSet<>();
	
	public Usuario obter(Long id) {
		for (Usuario usuario : listaUsuarios) {
			if (id.equals(usuario.getId())) {
				return usuario;
			}
		}
		return null;
	}
	
	public void  salvarUsuario(Usuario novoUsuario) {
		novoUsuario.setId((long)listaUsuarios.size()+1);
		listaUsuarios.add(novoUsuario);
	}
	
	public void  editarUsuario(Usuario user) {
		listaUsuarios.remove(obter(user.getId()));
		listaUsuarios.add(user);
	}

	public void deletar(Long id) {
		listaUsuarios.remove(obter(id));
	}
	
	public Set<Usuario> listar(){
		return listaUsuarios;
	}
	
	public boolean checarEmailSenha(String email, String senha) {
		for (Usuario user : listaUsuarios) {
			if(user.getEmail().equals(email) && user.getSenha().equals(senha)) {
				return true;
			}
		}
		return false;
	}
}
