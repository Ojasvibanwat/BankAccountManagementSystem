package com.project.main.model;

<<<<<<< HEAD
//Java Class for performing Withdraw and Deposit Functionality
public class ClientBO 
{
	//Withdraw Function
	public int bAW( int withdraw,Client c) {
		
		int baw=c.getOutstandingAmount()-withdraw;
		return baw;
	}
	
	//Deposit Function
	public int bAD( int deposit,Client c) {
		
		int bad=c.getOutstandingAmount()+deposit;
		return bad;
	}
}


=======
public class ClientBO {
	public int bAW(int withdraw, Client c) {

		int baw = c.getOutstandingAmount() - withdraw;
		return baw;
	}

	public int bAD(int deposit, Client c) {

		int bad = c.getOutstandingAmount() - deposit;
		return bad;
	}
}
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
