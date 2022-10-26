package com.project.main.model;

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
