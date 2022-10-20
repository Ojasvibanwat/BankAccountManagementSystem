package com.project.main.repository;

import java.util.ArrayList;
import java.util.Optional;

import com.project.main.model.Client;

public class ClientRepositoryImpl {
		
	private ClientRepository clientRepository;

	public String saveClient(Client client) {
		System.out.println("ClientRepositoryImpl class saveClient");
		Optional<Client> insertClient = clientRepository.findById(client.getId());
		if (insertClient.isPresent()) {
			return "Client is present!";
		} else {
			clientRepository.save(client);
			return "Client added!";
		}
	}

	public String saveOrUpdate(Client client) {
		System.out.println("ClientRepositoryImpl class saveOrUpdate");
		Optional<Client> insertClient = clientRepository.findById(client.getId());
		if (insertClient.isPresent()) {
			clientRepository.save(client);
			return "Client updated!";
		} else {
			return "Client is not present!";
		}
	}

	public String deleteById(int id) {
		System.out.println("ClientRepositoryImpl class deleteById");
		clientRepository.deleteById(id);
		return "Client deleted!";
	}

	public Client findById(int id) {
		System.out.println("ClientRepositoryImpl class findById");
		Client client = clientRepository.findById(id).get();
		return client;
	}

	public ArrayList<Client> allClient() {
		System.out.println("ClientRepositoryImpl class allClient");
		ArrayList<Client> clientsList = (ArrayList<Client>) clientRepository.findAll();
		return clientsList;
	}

}
