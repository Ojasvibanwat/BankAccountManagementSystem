package com.project.main.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.main.exception.ClientNotFoundException;
import com.project.main.model.Client;
import com.project.main.repository.ClientRepositoryImpl;

@Service
public class ClientService {
	
	@Autowired
	ClientRepositoryImpl clientRepositoryImpl;

	public String insert(Client client) {
		System.out.println("Service Class insert");
		return clientRepositoryImpl.saveClient(client);
	}

	public String update(Client client) {
		System.out.println("Service Class update");
		return clientRepositoryImpl.saveOrUpdate(client);
	}

	public Client getClientById(int id) {
		System.out.println("Service Class getClientById");
		return clientRepositoryImpl.findById(id);
	}

	public String delete(int id) {
		System.out.println("Service Class delete");
		return clientRepositoryImpl.deleteById(id);
	}

	public ArrayList<Client> getAllClient() {
		System.out.println("Service Class getAllClient");
		ArrayList<Client> clients = new ArrayList<Client>();
		try {
			clients = clientRepositoryImpl.allClient();
			if (clients.isEmpty()) {
				throw new ClientNotFoundException("Clients Not Found In Database");
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return clients;
	}
}
