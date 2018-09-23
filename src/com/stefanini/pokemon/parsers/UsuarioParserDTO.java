package com.stefanini.pokemon.parsers;

import com.stefanini.pokemon.dtos.UsuarioDTO;
import com.stefanini.pokemon.entities.Usuario;

public class UsuarioParserDTO extends AbstractParser<UsuarioDTO, Usuario> {

	@Override
	UsuarioDTO toDTO(Usuario entity) {
		UsuarioDTO dto = new UsuarioDTO();
		
		dto.setEmail(entity.getEmail());
		dto.setId(entity.getId());
		dto.setSenha(entity.getSenha());
		
		return dto;
	}

	@Override
	Usuario toEntity(UsuarioDTO dto) {
		Usuario entity = new Usuario();
		
		entity.setEmail(dto.getEmail());
		entity.setId(dto.getId());
		entity.setSenha(dto.getSenha());
		
		return entity;
	}

}
