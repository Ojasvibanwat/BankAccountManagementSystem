package com.project.main.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Client")
public class Client {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private int id;
	@Column(name = "NAME")
	private String name;
	@Column(name = "ACCOUNT_NUMBER")
	private int accountNumber;
	@Column(name = "BALANCE")
	private int balance;
	@Column(name = "OUTSTANDING_AMOUNT")
	private int outstandingAmount;
	@Column(name = "DATE_OF_JOINING")
	private Date dateOfJoining;
	@Column(name = "PASSWORD")
	private String password;

	public Client() {

	}

	public Client(String name, int accountNumber, int balance, int outstandingAmount, Date dateOfJoining,
			String password) {
		super();
		this.name = name;
		this.accountNumber = accountNumber;
		this.balance = balance;
		this.outstandingAmount = outstandingAmount;
		this.dateOfJoining = dateOfJoining;
		this.password = password;
	}

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getAccountNumber() {
		return accountNumber;
	}

	public int getBalance() {
		return balance;
	}

	public int getOutstandingAmount() {
		return outstandingAmount;
	}

	public Date getDateOfJoining() {
		return dateOfJoining;
	}

	public String getPassword() {
		return password;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setAccountNumber(int accountNumber) {
		this.accountNumber = accountNumber;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public void setOutstandingAmount(int outstandingAmount) {
		this.outstandingAmount = outstandingAmount;
	}

	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
