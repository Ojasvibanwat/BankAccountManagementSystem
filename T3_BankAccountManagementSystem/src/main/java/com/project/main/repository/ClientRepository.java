package com.project.main.repository;

import org.springframework.data.repository.CrudRepository;

import com.project.main.model.Client;

<<<<<<< HEAD
/* CrudRepository is an interface that contains methods for CRUD operations. 
   In Order to use this we have to create an interface extend CrudRepository , 
   then implement the new interface through another class                          */

public interface ClientRepository extends CrudRepository<Client, Integer> 
{
	
=======
public interface ClientRepository extends CrudRepository<Client, Integer> {

>>>>>>> fce318d8319955834ba24dae514202a0413b1fc2
}