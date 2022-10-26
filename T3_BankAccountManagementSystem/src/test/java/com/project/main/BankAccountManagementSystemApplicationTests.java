package com.project.main;

//This Class Consists Junit Test Cases for deposit and withdraw functionality .
import java.util.Date;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.project.main.model.Client;
import com.project.main.model.ClientBO;
@SpringBootTest
class BankAccountManagementSystemApplicationTests 
{
	public Client c = new Client("Mark",23456,100000,100000,new Date(22,10,22),"mark123");
	public ClientBO cbo = new ClientBO();
	
	@Before //Preparation for Junit Testing
	public void setUp() {
		System.out.println("Setting up tests");
	}
	
	@Test //This is to test whether application is able to load the context or not
	void contextLoads() {
	}
	
	//TestCases for Withdraw Functionality
	public void TestBAW() {
		Assert.assertEquals(40000, cbo.bAW(60000,c), 0.000001d);
		Assert.assertEquals(50000, cbo.bAW(50000,c), 0.000001d);
		Assert.assertEquals(30000, cbo.bAW(70000,c), 0.000001d);
		Assert.assertEquals(90000, cbo.bAW(10000,c), 0.000001d);
		Assert.assertEquals(85000, cbo.bAW(15000,c), 0.000001d);		
	}

	//TestCases for Deposit Functionality
	@Test
	public void TestBAD() {
		Assert.assertEquals(160000, cbo.bAD(60000,c), 0.000001d);
		Assert.assertEquals(150000, cbo.bAD(50000,c), 0.000001d);
		Assert.assertEquals(170000, cbo.bAD(70000,c), 0.000001d);
		Assert.assertEquals(110000, cbo.bAD(10000,c), 0.000001d);
		Assert.assertEquals(115000, cbo.bAD(15000,c), 0.000001d);
	}
	
	@After //Clean Up after the testcase
	public void tearDown() 
	{
		cbo=null;
		c=null;
	}
}
