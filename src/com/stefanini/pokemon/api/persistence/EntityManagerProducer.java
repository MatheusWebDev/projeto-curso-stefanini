package com.stefanini.pokemon.api.persistence;

import java.io.Serializable;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;



@ApplicationScoped
public class EntityManagerProducer implements Serializable {
	@PersistenceContext(unitName = "pokemon")
	@Produces
	private EntityManager em;
}
