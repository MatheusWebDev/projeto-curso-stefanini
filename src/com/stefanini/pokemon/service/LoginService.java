package com.stefanini.pokemon.service;

import java.util.Set;

import javax.inject.Inject;

import com.stefanini.pokemon.dtos.UsuarioDTO;
import com.stefanini.pokemon.entities.Usuario;

public class LoginService extends ServiceBase {

	public void login() {
		System.out.println("Login Efetuado!");
	}
	
	@Inject
	private BaseDeDados baseDados;
	
	//LISTAR USUARIOS
	public Set<Usuario> listar(){
		return baseDados.listar();
	}
	
	//CADASTRAR NOVO USUARIO
	public void salvar(UsuarioDTO dto) {
		
		Usuario user = new Usuario();
		user.setEmail(dto.getEmail());
		user.setSenha(dto.getSenha());
		
		baseDados.salvarUsuario(user);		
	}
	
	public Usuario obterUser(Long id) {
		return baseDados.obter(id);
	}

	public void editar(UsuarioDTO dto) {	
		Usuario user = new Usuario();
		user.setEmail(dto.getEmail());
		user.setSenha(dto.getSenha());
		user.setId(dto.getId());
		
		baseDados.editarUsuario(user);
	}

	public void deletar(Usuario user) {
		baseDados.deletar(user);
	}
	
}
