package com.project.main.service;

import java.util.ArrayList;
import java.util.NoSuchElementException;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.project.main.exception.ClientNotFoundException;
import com.project.main.model.Client;
import com.project.main.repository.ClientRepository;

@Service
@Transactional
public class ClientService {

	@Autowired
	ClientRepository clientRepository;

	public ArrayList<Client> getAllClients() {
		ArrayList<Client> clientsList = (ArrayList<Client>) clientRepository.findAll();
		try {
			if (clientsList.isEmpty()) {
				throw new ClientNotFoundException("No Clients Found In Database");
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return clientsList;
	}

	public ResponseEntity<Client> getClientById(int id) {
		try {
			Client c = clientRepository.findById(id).get();
			return new ResponseEntity<Client>(c, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<Client> createClient(Client client) {
		clientRepository.save(client);
		Client c = clientRepository.findById(client.getId()).get();
		return new ResponseEntity<Client>(c, HttpStatus.OK);
	}

	public ResponseEntity<Client> updateClient(int id, Client client) throws ClientNotFoundException {
		Client updateClient = clientRepository.findById(id)
                .orElseThrow(() -> new ClientNotFoundException("Client not exist with id: " + id));
		try {
			if (updateClient.getId() != 0) {
				updateClient.setAccountNumber(client.getAccountNumber());
				updateClient.setBalance(client.getBalance());
				updateClient.setDateOfJoining(client.getDateOfJoining());
				updateClient.setName(client.getName());
				updateClient.setOutstandingAmount(client.getOutstandingAmount());
				updateClient.setPassword(client.getPassword());
				clientRepository.save(updateClient);
				return new ResponseEntity<Client>(updateClient, HttpStatus.OK);
			} else {
				throw new ClientNotFoundException("Client Not Found In Database");
			}
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<Client>(updateClient, HttpStatus.NOT_FOUND);
		}
	}

	public ResponseEntity<HttpStatus> deleteClient(int id) {
		try {
			clientRepository.deleteById(id);
			return new ResponseEntity<HttpStatus>(HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
