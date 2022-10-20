package com.project.main.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.main.model.Client;

public interface ClientRepository extends CrudRepository<Client, Integer> {
		
}
