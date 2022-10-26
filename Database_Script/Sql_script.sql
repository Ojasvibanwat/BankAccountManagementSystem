create database bank;

use bank;

<<<<<<< HEAD
CREATE TABLE clients(Id INT AUTO_INCREMENT,Name varchar(100),AccountNumber INT,Balance INT,
OutstandingAmount INT,DateOfJoining DATE,Password varchar(255),PRIMARY KEY (Id));

INSERT INTO clients VALUES(2,23478,200000,'2022-10-22','Robin',200000,MD5('robin123'));		   
		    
INSERT INTO clients VALUES(1,23456,100000,'2022-10-22','Mark',100000,MD5('mark123'));    
=======
CREATE TABLE clients(id INT AUTO_INCREMENT,name varchar(100),account_number INT,balance INT,outstanding_amount INT,date_of_joining varchar(50),password varchar(255),PRIMARY KEY (id),CONSTRAINT UniqueAccountNumber UNIQUE(account_number));

INSERT INTO clients VALUES(1,'Mark',23456,100000,100000,'2022-10-22','Mark@123');

INSERT INTO clients VALUES(2,'Robin',23478,200000,200000,'2022-10-23','Robin@123');
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2


 -----------------------------------------------------------------------------------------------------

<<<<<<< HEAD
           
=======
		   
		    
                   
>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
		   


