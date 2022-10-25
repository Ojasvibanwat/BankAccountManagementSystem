package com.project.BAMSTrial.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.BAMSTrial.exception.ClientNotFoundException;
import com.project.BAMSTrial.model.Client;
import com.project.BAMSTrial.service.ClientService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/bsv")
public class ClientController {

	@Autowired
	ClientService clientService;

	@GetMapping("/clients")
	public ArrayList<Client> getAllClients(@RequestParam(required = false) String title) {
		return clientService.getAllClients();
	}

	@GetMapping("/retrieveClient/{id}")
	public ResponseEntity<Client> getClientById(@PathVariable("id") int id) {
		return clientService.getClientById(id);
	}

	@PostMapping("/createClient")
	public ResponseEntity<Client> createClient(@RequestBody Client client) {
		return clientService.createClient(client);
	}

	@PutMapping("/updateClient/{id}")
	public ResponseEntity<Client> updateClient(@PathVariable int id, @RequestBody Client client) {
		try {
			return clientService.updateClient(id, client);
		} catch (ClientNotFoundException e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(client,HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteClient/{id}")
	public ResponseEntity<HttpStatus> deleteClient(@PathVariable("id") int id) {
		return clientService.deleteClient(id);
	}

}