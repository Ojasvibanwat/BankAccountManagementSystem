package com.project.main.model;

<<<<<<< HEAD
import java.util.Date;

=======
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
<<<<<<< HEAD
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
=======
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
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	private String password;

	public Client() {

	}

<<<<<<< HEAD
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
	
=======
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

>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public int getAccountNumber() {
<<<<<<< HEAD
		return accountNumber;
=======
		return account_number;
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	}

	public int getBalance() {
		return balance;
	}

	public int getOutstandingAmount() {
<<<<<<< HEAD
		return outstandingAmount;
	}

	public Date getDateOfJoining() {
		return dateOfJoining;
=======
		return outstanding_amount;
	}

	public String getDateOfJoining() {
		return date_of_joining;
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
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
<<<<<<< HEAD
		this.accountNumber = accountNumber;
=======
		this.account_number = accountNumber;
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public void setOutstandingAmount(int outstandingAmount) {
<<<<<<< HEAD
		this.outstandingAmount = outstandingAmount;
	}

	public void setDateOfJoining(Date dateOfJoining) {
		this.dateOfJoining = dateOfJoining;
=======
		this.outstanding_amount = outstandingAmount;
	}

	public void setDateOfJoining(String dateOfJoining) {
		this.date_of_joining = dateOfJoining;
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
