package com.project.main.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

<<<<<<< HEAD
//This Class is for Handling Exception, When the required client is not found in the database.
=======
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ClientNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public ClientNotFoundException(String msg) {
		super(msg);
	}
}