import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClientService from '../services/ClientService'
import '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/Bank_Account_Management_System/bank_account_management_system/src/index.js';

const Home = () => {
    /*useEffect(() => {

        home();
    }, [])

    const home = () => {
        ClientService.getClientById(id).then((response) => {
            setId(response.data.id)

        }).catch(error => {
            console.log(error);
        })
    }*/


    return (
        <div className="container">
            <br />
            <h2 className="text-center"> Welcome</h2>

            <div className="container-home" >
                
                <Link to={`/clientHome`} className="client">Client</Link>
            </div> 
            <div className="container-home">
                <Link to="/clients" className="admin">Admin</Link>
            </div>


        </div>
    )
}

export default Home