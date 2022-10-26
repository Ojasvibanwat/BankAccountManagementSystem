package com.project.main.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.main.model.Client;
import com.project.main.repository.ClientRepository;

<<<<<<< HEAD
//This Class is to implement few CRUD operations  
=======
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
@Service
@Transactional
public class ClientFunctionService {

	@Autowired
	ClientRepository clientRepository;

<<<<<<< HEAD
	//This function performs  retrieve functionality
=======
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	public Client getClientById(int id) {
		Client client = clientRepository.findById(id).get();
		return client;
	}

<<<<<<< HEAD
	//This function performs  update functionality
=======
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	public void update(Client client) {
		clientRepository.save(client);
	}

}
