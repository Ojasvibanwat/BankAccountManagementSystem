package com.project.main;

import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import com.project.main.model.Client;
import com.project.main.model.ClientBO;

@SpringBootTest
class BankAccountManagementSystemApplicationTests {
	public Client c = new Client("Mark", 2456, 100000, 100000, "2022-10-26", "Mark@123");
	public ClientBO cbo = new ClientBO();

	@Before
	public void setUp() {
		System.out.println("Setting up tests");
	}

	@Test
	void contextLoads() {
	}

	public void TestBAW() {
		Assert.assertEquals(40000, cbo.bAW(60000, c), 0.000001d);
		Assert.assertEquals(50000, cbo.bAW(50000, c), 0.000001d);
		Assert.assertEquals(30000, cbo.bAW(70000, c), 0.000001d);
		Assert.assertEquals(90000, cbo.bAW(10000, c), 0.000001d);
		Assert.assertEquals(85000, cbo.bAW(15000, c), 0.000001d);
	}

	@Test
	public void TestBAD() {
		Assert.assertEquals(40000, cbo.bAD(60000, c), 0.000001d);
		Assert.assertEquals(50000, cbo.bAD(50000, c), 0.000001d);
		Assert.assertEquals(30000, cbo.bAD(70000, c), 0.000001d);
		Assert.assertEquals(90000, cbo.bAD(10000, c), 0.000001d);
		Assert.assertEquals(85000, cbo.bAD(15000, c), 0.000001d);
	}

	@After
	public void tearDown() {
		cbo = null;
		c = null;
	}
}
