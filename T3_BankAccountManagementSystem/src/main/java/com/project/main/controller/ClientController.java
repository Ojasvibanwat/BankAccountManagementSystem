package com.project.main.controller;

import java.util.ArrayList;
<<<<<<< HEAD
=======

>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
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
<<<<<<< HEAD
=======

>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
import com.project.main.exception.ClientNotFoundException;
import com.project.main.model.Client;
import com.project.main.service.ClientService;

<<<<<<< HEAD

//This Controller Class Handles all the admin Functionality API's and URL Mappings
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/bsv") //This is the Home URL for admin Functionality.
=======
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/bsv")
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
public class ClientController {

	@Autowired
	ClientService clientService;

<<<<<<< HEAD
	@GetMapping("/clients")  //This URL provides the list of clients to admin.
=======
	@GetMapping("/clients")
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	public ArrayList<Client> getAllClients(@RequestParam(required = false) String title) {
		return clientService.getAllClients();
	}

<<<<<<< HEAD
	@GetMapping("/retrieveClient/{id}")  //This URL will let the admin to retrieve the Client by ClientId.
=======
	@GetMapping("/retrieveClient/{id}")
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	public ResponseEntity<Client> getClientById(@PathVariable("id") int id) {
		return clientService.getClientById(id);
	}

<<<<<<< HEAD
	@PostMapping("/createClient")   //This URL will let the admin to create Client.
=======
	@PostMapping("/createClient")
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	public ResponseEntity<Client> createClient(@RequestBody Client client) {
		return clientService.createClient(client);
	}

<<<<<<< HEAD
	@PutMapping("/updateClient/{id}") //This URL will let the admin to update Client Details.
=======
	@PutMapping("/updateClient/{id}")
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	public ResponseEntity<Client> updateClient(@PathVariable int id, @RequestBody Client client) {
		try {
			return clientService.updateClient(id, client);
		} catch (ClientNotFoundException e) {
			System.out.println(e.getMessage());
<<<<<<< HEAD
			return new ResponseEntity<>(client,HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteClient/{id}") //This URL will let the admin to delete Client Information.
=======
			return new ResponseEntity<>(client, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/deleteClient/{id}")
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	public ResponseEntity<HttpStatus> deleteClient(@PathVariable("id") int id) {
		return clientService.deleteClient(id);
	}

}
