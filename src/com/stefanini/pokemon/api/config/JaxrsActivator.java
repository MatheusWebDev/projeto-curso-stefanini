package com.stefanini.pokemon.api.config;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import com.stefanini.pokemon.api.LoginApi;
import com.stefanini.pokemon.api.UsuarioAPI;

@ApplicationPath("/rest")
public class JaxrsActivator extends Application {

	Set<Class<?>> classes = new HashSet<>();

	public JaxrsActivator() {
		classes.add(LoginApi.class);
		classes.add(UsuarioAPI.class);
	}
	
	@Override
	public Set<Class<?>> getClasses() {
		return classes;
	}
	
}
