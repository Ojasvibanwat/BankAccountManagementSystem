package com.project.main.controller;

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
import com.project.main.exception.ClientNotFoundException;
import com.project.main.model.Client;
import com.project.main.service.ClientService;



//This Controller Class Handles all the admin Functionality API's and URL Mappings
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/bsv") //This is the Home URL for admin Functionality.


public class ClientController {

	@Autowired
	ClientService clientService;


	@GetMapping("/clients")  //This URL provides the list of clients to admin.

	public ArrayList<Client> getAllClients(@RequestParam(required = false) String title) {
		return clientService.getAllClients();
	}


	@GetMapping("/retrieveClient/{id}")  //This URL will let the admin to retrieve the Client by ClientId.

	public ResponseEntity<Client> getClientById(@PathVariable("id") int id) {
		return clientService.getClientById(id);
	}

	@PostMapping("/createClient")   //This URL will let the admin to create Client.

	public ResponseEntity<Client> createClient(@RequestBody Client client) {
		return clientService.createClient(client);
	}


	@PutMapping("/updateClient/{id}") //This URL will let the admin to update Client Details.
	public ResponseEntity<Client> updateClient(@PathVariable int id, @RequestBody Client client) {
		try {
			return clientService.updateClient(id, client);
		} catch (ClientNotFoundException e) {
			System.out.println(e.getMessage());

			return new ResponseEntity<>(client,HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteClient/{id}") //This URL will let the admin to delete Client Information.
	public ResponseEntity<HttpStatus> deleteClient(@PathVariable("id") int id) {
		return clientService.deleteClient(id);
	}

}
