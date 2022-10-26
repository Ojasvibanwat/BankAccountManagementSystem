package com.project.main.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "clients")
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;

	@Column(name = "name")
	private String name;

	@Column(name = "account_number", unique = true)
	private int account_number;

	@Column(name = "balance")
	private int balance;

	@Column(name = "outstanding_amount")
	private int outstanding_amount;

	@Column(name = "date_of_joining")
	private String date_of_joining;

	@Column(name = "password")
	private String password;

	public Client() {

	}

	public Client(String name, int accountNumber, int balance, int outstandingAmount, String dateOfJoining,
			String password) {
		super();
		this.name = name;
		this.account_number = accountNumber;
		this.balance = balance;
		this.outstanding_amount = outstandingAmount;
		this.date_of_joining = dateOfJoining;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getAccountNumber() {
		return account_number;
	}

	public int getBalance() {
		return balance;
	}

	public int getOutstandingAmount() {
		return outstanding_amount;
	}

	public String getDateOfJoining() {
		return date_of_joining;
	}

	public String getPassword() {
		return password;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setAccountNumber(int accountNumber) {
		this.account_number = accountNumber;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public void setOutstandingAmount(int outstandingAmount) {
		this.outstanding_amount = outstandingAmount;
	}

	public void setDateOfJoining(String dateOfJoining) {
		this.date_of_joining = dateOfJoining;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
