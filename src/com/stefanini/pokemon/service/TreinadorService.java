package com.stefanini.pokemon.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import com.stefanini.pokemon.daos.TreinadorDAO;
import com.stefanini.pokemon.dtos.TreinadorDTO;
import com.stefanini.pokemon.entities.Treinador;
import com.stefanini.pokemon.parsers.TreinadorParserDTO;

public class TreinadorService extends ServiceBase {

	@Inject
	private TreinadorDAO treinadorDAO;
	
	private TreinadorParserDTO treinadorParserDTO = new TreinadorParserDTO();
	
	
	public TreinadorDTO incluir(TreinadorDTO dto) {
		return dto;
	}
	
	public TreinadorDTO alterar(TreinadorDTO dto) {
		Treinador treinador = treinadorParserDTO.toEntity(dto);
		return treinadorParserDTO.toDTO(treinadorDAO.alterar(treinador));
	}
	
	public void excluir(TreinadorDTO dto) {
		excluir(dto.getId());
	}
	
	public void excluir(Long id) {
		treinadorDAO.excluir(id);
	}
	
	public TreinadorDTO obter(Long id) {
		Treinador treinador = treinadorDAO.obter(id);
		return treinadorParserDTO.toDTO(treinador);
	}
	
	public List<TreinadorDTO> listar() {
		List<Treinador> listaTreinador = new ArrayList<>(); //obter lista de treinadores da base de dados
		return new TreinadorParserDTO().toDTO(listaTreinador);
	}
	
}
