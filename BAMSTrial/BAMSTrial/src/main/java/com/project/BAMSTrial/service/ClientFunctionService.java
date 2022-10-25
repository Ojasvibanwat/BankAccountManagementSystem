package com.project.BAMSTrial.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.BAMSTrial.model.Client;
import com.project.BAMSTrial.repository.ClientRepository;

@Service
@Transactional
public class ClientFunctionService {

	@Autowired
	ClientRepository clientRepository;

	public Client getClientById(int id) {
		Client client = clientRepository.findById(id).get();
		return client;
	}

	public void update(Client client) {
		clientRepository.save(client);
	}

}
