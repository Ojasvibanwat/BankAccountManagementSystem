package com.project.main.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.main.model.Client;
import com.project.main.repository.ClientRepository;

@Service
public class ClientService {
	@Autowired
	ClientRepository clientRepository;

	public Client getClientById(int id) {
		return clientRepository.findById(id).get();
	}

	public void delete(int id) {
		clientRepository.deleteById(id);
	}

	public void saveOrUpdate(Client client) {
		clientRepository.save(client);
	}

	public List<Client> getAllClient() {
		List<Client> clients = new ArrayList<Client>();
		clientRepository.findAll().forEach(client1 -> clients.add(client1));
		return clients;
	}

	public void update(Client client, int id) {
		clientRepository.save(client);
	}
}
