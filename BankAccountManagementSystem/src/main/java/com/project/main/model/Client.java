package com.project.main.model;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "clients") //Name of the Database Table
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) //AutoGeneration of PrimaryKey 
	private int id;
	
	//Other Columns of the Database Table and their respective Java Class Attributes
	
	@Column(name ="Name")
	private String name;

	@Column(name ="AccountNumber",unique=true)
	private int accountNumber;

	@Column(name ="Balance")
	private int balance;

	@Column(name ="OutstandingAmount")
	private int outstandingAmount;

	@Column(name ="DateOfJoining")
	private Date dateOfJoining;
	
	@Column(name ="Password")

	private String password;

	public Client() {

	}


	//Parameterized Constructor

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

	//Getters and Setters for Private Attributes
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

	public void setId(int id) {
		this.id = id;
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
