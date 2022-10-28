package com.project.main.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.main.model.Client;
import com.project.main.repository.ClientRepository;

//This Class is to implement few CRUD operations  
@Service
@Transactional
public class ClientFunctionService {

	@Autowired
	ClientRepository clientRepository;

	// This function performs retrieve functionality
	public Client getClientById(int id) {
		Client client = clientRepository.findById(id).get();
		return client;
	}

	// This function performs update functionality
	public void update(Client client) {
		clientRepository.save(client);
	}

}
