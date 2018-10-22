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
	
	
	public TreinadorDTO incluir(TreinadorDTO dto) throws Exception {
		if (dto == null) {
			throw new Exception("Dados vazios !");
		}
		
		List<TreinadorDTO> treinadores = listar();
		
		for (TreinadorDTO t : treinadores) {
			if (t.getUsuario().getEmail().equalsIgnoreCase(dto.getUsuario().getEmail())) {
				throw new Exception("E-mail já cadastrado !");
			}
		}
		
		Treinador treinador = treinadorParserDTO.toEntity(dto);
		baseDados.addTreinador(treinadorParserDTO.toEntity(dto));
		return treinadorParserDTO.toDTO(treinador);
	}
	
	public TreinadorDTO alterar(TreinadorDTO dto) {
		Treinador treinador = treinadorParserDTO.toEntity(dto);
		return treinadorParserDTO.toDTO(treinador);
	}
	
	public void excluir(TreinadorDTO dto) throws Exception {
		excluir(dto.getId());
	}
	
	public void excluir(Long id) throws Exception {
		this.baseDados.deleteTreinador(id);
	}
	
	public TreinadorDTO obter(Long id) {
		Treinador treinador = new Treinador();//treinadorDAO.obter(id);
		return treinadorParserDTO.toDTO(treinador);
	}
	
	public List<TreinadorDTO> listar() {
		return new TreinadorParserDTO().toDTO(baseDados.getTreinadores());
	}
	
}
