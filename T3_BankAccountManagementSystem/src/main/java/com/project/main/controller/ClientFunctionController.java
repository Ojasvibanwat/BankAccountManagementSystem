package com.project.main.controller;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.main.model.Client;
import com.project.main.service.ClientFunctionService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/bsv")
public class ClientFunctionController {

	@Autowired
	ClientFunctionService clientFunctionService;

	@PutMapping("deposit/{id}/{amount}")
	public ResponseEntity<Client> deposit(@PathVariable("id") int id, @PathVariable("amount") int amount) {
		try {
			Client client = clientFunctionService.getClientById(id);
			int currentBalance = client.getOutstandingAmount() + amount;
			client.setOutstandingAmount(currentBalance);
			clientFunctionService.update(client);
			return new ResponseEntity<>(client, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/withdraw/{id}/{amount}")
	public ResponseEntity<Client> withdraw(@PathVariable("id") int id, @PathVariable("amount") int amount) {
		try {
			Client client = clientFunctionService.getClientById(id);
			if (amount <= client.getOutstandingAmount()) {
				client.setOutstandingAmount(client.getOutstandingAmount() - amount);
				clientFunctionService.update(client);
				return new ResponseEntity<>(client, HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
			}
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/viewBalance/{id}")
	public ResponseEntity<Client> viewBalance(@PathVariable("id") int id) {
		try {
			Client client = clientFunctionService.getClientById(id);
			return new ResponseEntity<>(client, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
