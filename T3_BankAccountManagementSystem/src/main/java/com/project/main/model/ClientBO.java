package com.project.main.model;

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


