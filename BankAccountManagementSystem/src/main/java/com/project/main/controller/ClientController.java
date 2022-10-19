package com.project.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.main.service.ClientService;
import com.project.main.model.Client;

@RestController
public class ClientController {
	@Autowired
	ClientService clientService;

	@GetMapping("/allClients")
	private List<Client> getAllClient() {
		return clientService.getAllClient();
	}

	@GetMapping("/client/retrieve/{id}")
	private Client getClient(@PathVariable("id") int id) {
		return clientService.getClientById(id);
	}

	@DeleteMapping("/client/delete/{id}")
	private void deleteClient(@PathVariable("id") int id) {
		clientService.delete(id);
	}

	@PostMapping("/client/add")
	private int addClient(@RequestBody Client client) {
		clientService.saveOrUpdate(client);
		return client.getId();
	}

	@PutMapping("/client/update")
	private Client update(@RequestBody Client client) {
		clientService.saveOrUpdate(client);
		return client;
	}
}
