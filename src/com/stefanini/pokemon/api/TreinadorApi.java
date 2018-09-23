package com.stefanini.pokemon.api;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.stefanini.pokemon.daos.TreinadorDAO;
import com.stefanini.pokemon.dtos.TreinadorDTO;

@Path("/treinador")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TreinadorApi {

	@Inject
	private TreinadorDAO treinadorDao;
	
	@POST
	public Response incluir(TreinadorDTO treinador) {
//		TreinadorDAO treinadorDao = new TreinadorDAO();
//		treinadorDao.incluir(treinador);
		return Response.ok().build();
	}

	@PUT
	public Response alterar(TreinadorDTO treinador) {
//		TreinadorDAO treinadorDao = new TreinadorDAO();
//		treinadorDao.alterarTreinador(treinador);
		return Response.ok().build();
	}

	@DELETE
	@Path("/{id}")
	public Response deletar(@PathParam("id") Long id) {
//		TreinadorDAO treinadoDao = new TreinadorDAO();
//		treinadoDao.excluirTreinador(id);
		
		return Response.ok().build();
	}

	@GET
	public Response listar() {
//		PersistenceSingleton pers = PersistenceSingleton.getInstance();
//		TreinadorParserDTO treinadorParser = new TreinadorParserDTO();
//		Gson gson = new Gson();
//
//		List<TreinadorDTO> treinadores = treinadorParser.toDtoList(pers.getTreinadores());
//		return Response.ok(gson.toJson(treinadores)).build();
		
		return Response.ok(this.treinadorDao.getTodosTreinadores()).build();
	}
	

//	@GET
//	@Path("/{id}")
//	public Response obterTreinador(@PathParam("id") Long id) {

		
//	}
	
//	@POST
//	@Path("/{id}")
//	public Response obterTreinador(@PathParam("login") String login,@PathParam("senha") String senha) {
//		PersistenceSingleton pers = PersistenceSingleton.getInstance();
//		TreinadorParserDTO dto = new TreinadorParserDTO();
//		Gson gson = new Gson();
//		Treinador treinador = pers.getTreinador(id);
//		if (treinador != null) {
//			TreinadorDTO treinadorDto = dto.toDTO(treinador);
//			return Response.ok(gson.toJson(treinadorDto)).build();
//		}else {
//			return Response.ok().build();
//		}
//		
//	}

}
