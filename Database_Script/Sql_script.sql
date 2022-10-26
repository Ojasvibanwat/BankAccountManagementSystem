create database bank;

use bank;

CREATE TABLE clients(Id INT AUTO_INCREMENT,Name varchar(100),AccountNumber INT,Balance INT,
OutstandingAmount INT,DateOfJoining DATE,Password varchar(255),PRIMARY KEY (Id));

INSERT INTO clients VALUES(2,23478,200000,'2022-10-22','Robin',200000,MD5('robin123'));		   
		    
INSERT INTO clients VALUES(1,23456,100000,'2022-10-22','Mark',100000,MD5('mark123'));    


 -----------------------------------------------------------------------------------------------------

           
		   


