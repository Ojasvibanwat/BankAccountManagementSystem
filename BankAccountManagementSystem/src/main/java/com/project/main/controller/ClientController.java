package com.project.main.controller;

import java.util.ArrayList;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	public ResponseEntity<String> addClient(@RequestBody Client client) {
		System.out.println("Controller Class addClient");
		return new ResponseEntity(clientService.insert(client), HttpStatus.OK);
	}

	@GetMapping("/retrieveClient/{id}")
	public ResponseEntity<Client> getClient(@PathVariable("id") int id) {
		System.out.println("Controller Class getClient");
		try {
			return new ResponseEntity(clientService.getClientById(id), HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteClient/{id}")
	public void deleteClient(@PathVariable("id") int id) {
		System.out.println("Controller Class deleteClient");
		clientService.delete(id);
	}

	@PutMapping("/updateClient/{id}")
	public ResponseEntity<?> updateClient(@RequestBody Client client, @PathVariable("id") int id) {
		System.out.println("Controller Class updateClient");
		try {
			Client cl = clientService.getClientById(id);
			clientService.update(client);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/allClientList")
	public ArrayList<Client> getAllClient() {
		System.out.println("Controller Class getAllClient");
		return clientService.getAllClient();
	}

	@PutMapping("/client/{id}/deposit")
	public ResponseEntity<?> deposit(@RequestParam int amount, @PathVariable("id") int id) {
		System.out.println("Controller Class deposit");
		try {
			Client cl = clientService.getClientById(id);
			cl.setOutstandingAmount(cl.getOutstandingAmount() + amount);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/client/{id}/withdraw")
	public ResponseEntity<?> withdraw(@RequestParam int amount, @PathVariable("id") int id) {
		System.out.println();
		try {
			Client cl = clientService.getClientById(id);
			if (amount <= cl.getOutstandingAmount()) {
				cl.setOutstandingAmount(cl.getOutstandingAmount() - amount);
				return new ResponseEntity<>(HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
