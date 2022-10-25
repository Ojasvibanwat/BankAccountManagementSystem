package com.project.main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import org.springframework.boot.CommandLineRunner;


@SpringBootApplication
public class BankAccountManagementSystemApplication {

	public static void main(String[] args) 
	{
		SpringApplication.run(BankAccountManagementSystemApplication.class, args);
	}
	
	
//	Client client = new Client();
//	client.setName("Adam");
//	client.setAccountNumber(12345);
//	client.setBalance(10000);
//	client.setOutstandingAmount(10000);
//	client.setPassword("Adam@123");
//	clientRepository.save(client); 

}
