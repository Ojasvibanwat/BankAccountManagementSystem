package com.project.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.project.main.model.Client;

@SpringBootApplication
@EnableAutoConfiguration
@EnableJpaRepositories("com.project.main.repository")
public class BankAccountManagementSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(BankAccountManagementSystemApplication.class, args);
	}

}
