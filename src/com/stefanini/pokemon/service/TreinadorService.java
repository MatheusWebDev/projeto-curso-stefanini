package com.stefanini.pokemon.service;

import java.util.ArrayList;
import java.util.List;

import com.stefanini.pokemon.dtos.TreinadorDTO;
import com.stefanini.pokemon.entities.Treinador;
import com.stefanini.pokemon.parsers.TreinadorParserDTO;

public class TreinadorService extends ServiceBase {

	public TreinadorDTO incluir(TreinadorDTO dto) {
		return dto;
	}
	
	public TreinadorDTO alterar(TreinadorDTO dto) {
		return dto;
	}
	
	public void excluir(TreinadorDTO dto) {

	}
	
	public void excluir(Long id) {

	}
	
	public TreinadorDTO obter(Long id) {
		return null;
	}
	
	public List<TreinadorDTO> listar() {
		List<Treinador> listaTreinador = new ArrayList<>(); //obter lista de treinadores da base de dados
		return new TreinadorParserDTO().toDTO(listaTreinador);
	}
	
}
