package com.stefanini.pokemon.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.inject.Inject;

import com.stefanini.pokemon.dtos.UsuarioDTO;
import com.stefanini.pokemon.entities.Usuario;

public class UsuarioService extends ServiceBase {
private BaseDados baseDados;
	
	@Inject
	public UsuarioService(BaseDados baseDados) {
		this.baseDados = baseDados;
	}
	
	//CADASTRAR NOVO USUARIO
	public void salvar(UsuarioDTO dto) {
		
		Usuario user = new Usuario();
		user.setEmail(dto.getEmail());
		user.setSenha(dto.getSenha());
		
		baseDados.salvar(user);		
	}
	
	//LISTAR USUARIOS
	public List<UsuarioDTO> listar(){
		
		Set<Usuario> listaUsuarios = baseDados.listar();
		List<UsuarioDTO> listaUsuariosRetorno = new ArrayList<>();
		
		for( Usuario user : listaUsuarios) {
			UsuarioDTO userDTO = new UsuarioDTO();
			userDTO.setEmail(user.getEmail());
			userDTO.setSenha(user.getSenha());
			userDTO.setId(user.getId());
			listaUsuariosRetorno.add(userDTO);
		}		
		
		return listaUsuariosRetorno;
	}
	
	//OBTER UM USUARIO
	public UsuarioDTO obterUser(Long id) {
		Usuario user = baseDados.obter(id);
		UsuarioDTO userDTO = null;
		if (user != null) {
			userDTO = new UsuarioDTO();
			userDTO.setEmail(user.getEmail());
			userDTO.setSenha(user.getSenha());
			userDTO.setId(user.getId());
		}
		return userDTO;
	}

	// EDITAR UM USUARIO
	public void editar(UsuarioDTO dto) {	
		Usuario user = new Usuario();
		user.setEmail(dto.getEmail());
		user.setSenha(dto.getSenha());
		user.setId(dto.getId());
		
		baseDados.editarUsuario(user);
	}

	// DELETAR UM USARIO
	public void deletar(Long id) {
		baseDados.deletarUsuario(id);
	}
}
