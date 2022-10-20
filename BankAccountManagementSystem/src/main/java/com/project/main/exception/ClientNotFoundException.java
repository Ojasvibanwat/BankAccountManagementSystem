package com.project.main.exception;

public class ClientNotFoundException extends Exception {
	private static final long serialVersionUID = 1L;

	public ClientNotFoundException(String msg) {
        super(msg);
	}
}
