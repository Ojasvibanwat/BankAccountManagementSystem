package com.project.main.model;

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
	private String accountNumber;
	@Column(name = "BALANCE")
	private String balance;
	@Column(name = "OUTSTANDING_AMOUNT")
	private String outstandingAmount;
	@Column(name = "DATE_OF_JOINING")
	private String dateOfJoining;
	@Column(name = "PASSWORD")
	private String password;

	public Client() {

	}

	public Client(String name, String accountNumber, String balance, String outstandingAmount, String dateOfJoining,
			String password) {
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

	public String getAccountNumber() {
		return accountNumber;
	}

	public String getBalance() {
		return balance;
	}

	public String getOutstandingAmount() {
		return outstandingAmount;
	}

	public String getDateOfJoining() {
		return dateOfJoining;
	}

	public String getPassword() {
		return password;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public void setBalance(String balance) {
		this.balance = balance;
	}

	public void setOutstandingAmount(String outstandingAmount) {
		this.outstandingAmount = outstandingAmount;
	}

	public void setDateOfJoining(String dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Client [id=" + id + ", name=" + name + ", accountNumber=" + accountNumber + ", balance=" + balance
				+ ", outstandingAmount=" + outstandingAmount + ", dateOfJoining=" + dateOfJoining + ", password="
				+ password + "]";
	}
}
