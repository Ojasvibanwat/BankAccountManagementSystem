package com.project.BAMSTrial;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.project.BAMSTrial.model.Client;
import com.project.BAMSTrial.repository.ClientRepository;

@SpringBootApplication
public class BamsTrialApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BamsTrialApplication.class, args);
	}

	@Autowired
	ClientRepository clientRepository;

	@Override
	public void run(String... args) throws Exception {
//		Client client = new Client();
//		client.setName("Adam");
//		client.setAccountNumber(1);
//		client.setBalance(10000);
//		client.setOutstandingAmount(10000);
//		client.setPassword("Adam@123");
//		clientRepository.save(client);
	}
}