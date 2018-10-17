package com.stefanini.pokemon.service;

import java.util.List;

import javax.inject.Inject;

import com.stefanini.pokemon.dtos.TreinadorDTO;
import com.stefanini.pokemon.entities.Treinador;
import com.stefanini.pokemon.parsers.TreinadorParserDTO;
import com.stefanini.pokemon.persistence.BaseDados;

public class TreinadorService extends ServiceBase {

	@Inject
	private BaseDados baseDados;
	
	private TreinadorParserDTO treinadorParserDTO = new TreinadorParserDTO();
	
	
	public TreinadorDTO incluir(TreinadorDTO dto) {
		return dto;
	}
	
	public TreinadorDTO alterar(TreinadorDTO dto) {
		Treinador treinador = treinadorParserDTO.toEntity(dto);
		return treinadorParserDTO.toDTO(treinador);
	}
	
	public void excluir(TreinadorDTO dto) {
		excluir(dto.getId());
	}
	
	public void excluir(Long id) {
		//treinadorDAO.excluir(id);
	}
	
	public TreinadorDTO obter(Long id) {
		Treinador treinador = new Treinador();//treinadorDAO.obter(id);
		return treinadorParserDTO.toDTO(treinador);
	}
	
	public List<TreinadorDTO> listar() {
		return new TreinadorParserDTO().toDTO(baseDados.getTreinadores());
	}
	
}
