package com.project.main.controller;

import java.util.ArrayList;

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
	ClientService clientService = new ClientService();

	public ClientController() {
	}

	@PostMapping("/addClient")
	public String addClient(@RequestBody Client client) {
		System.out.println("Controller Class addClient");
		return clientService.insert(client);
	}

	@GetMapping("/retrieveClient/{id}")
	public Client getClient(@PathVariable("id") int id) {
		System.out.println("Controller Class getClient");
		return clientService.getClientById(id);
	}

	@DeleteMapping("/deleteClient/{id}")
	public void deleteClient(@PathVariable("id") int id) {
		System.out.println("Controller Class deleteClient");
		clientService.delete(id);
	}

	@PutMapping("/updateClient")
	public Client updateClient(@RequestBody Client client) {
		System.out.println("Controller Class updateClient");
		clientService.update(client);
		return client;
	}

	@GetMapping("/allClientList")
	public ArrayList<Client> getAllClient() {
		System.out.println("Controller Class getAllClient");
		return clientService.getAllClient();
	}
	
}
