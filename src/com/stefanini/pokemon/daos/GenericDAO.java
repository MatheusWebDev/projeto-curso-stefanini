package com.stefanini.pokemon.daos;

import java.util.List;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

import org.hibernate.Session;

import com.stefanini.pokemon.entities.EntityBase;

public class GenericDAO<PK, ENTITY extends EntityBase>{
	
	@Inject
	private EntityManager em;
	
	private Class<ENTITY> entityClass;
	
	public EntityManager getEntityManager() {
		return em;
	}
	
	public GenericDAO(Class<ENTITY> entity) {
		this.entityClass = entity;
	}
	
	public List getList() {
		CriteriaBuilder criteria = em.getCriteriaBuilder();
		CriteriaQuery<ENTITY> criteriaQuery = criteria.createQuery(entityClass);
		Root<ENTITY> root = criteriaQuery.from(entityClass);
		CriteriaQuery<ENTITY> criteriaQuery2 = criteriaQuery.select(root);

		TypedQuery<ENTITY> typedQuery = em.createQuery(criteriaQuery2);
		return typedQuery.getResultList();
	}
	
	public Session getSession() {
		return (Session) em.getDelegate();
	}
}
