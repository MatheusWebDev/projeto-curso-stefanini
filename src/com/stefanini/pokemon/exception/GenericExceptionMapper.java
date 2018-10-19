package com.stefanini.pokemon.exception;

import java.io.PrintWriter;
import java.io.StringWriter;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.ext.ExceptionMapper;

public class GenericExceptionMapper implements ExceptionMapper<Exception>{
	final int STATUS = 500;

	@Override
	public Response toResponse(Exception exception) {
		Mensagem mensagem = new Mensagem();
		
		mensagem.setStatus(STATUS);
		mensagem.setMensagem(exception.getMessage());
		mensagem.setTipo("ERROR");
		
		StringWriter stringWriter = new StringWriter();
		exception.printStackTrace(new PrintWriter(stringWriter));
		mensagem.setStackTrace(stringWriter.toString());
		
		return Response.ok(mensagem).type(MediaType.APPLICATION_JSON).status(STATUS).build();
	}
	
}

class Mensagem {
	private Integer status;
	private String mensagem;
	private String stackTrace;
	private String tipo;
	
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public String getMensagem() {
		return mensagem;
	}
	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
	public String getStackTrace() {
		return stackTrace;
	}
	public void setStackTrace(String stackTrace) {
		this.stackTrace = stackTrace;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
}