import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClientService from '../services/ClientService'
import '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/Bank_Account_Management_System/bank_account_management_system/src/index.js';

const Home = () => {

    const [id, setId] = useState('')


    useEffect(() => {

        home();
    }, [])

    const home = () => {
        ClientService.getClientById(id).then((response) => {
            setId(response.data.id)

        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="container">
            <br />
            <h2 className="text-center"> HomePage</h2>

            <div className="container-home" >
                <div className="form-group mb-2">
                    <label className="form-label"> Enter ID for client functions :</label>
                    <input
                        type="int"
                        placeholder="Enter id"
                        name="id"
                        className="form-control"
                        value={id}
                        onChange={(c) => setId(c.target.value)}
                    >
                    </input>
                </div>
                <Link to={`/viewDetails/${id}`} className="client">Client</Link>
            </div>
            <div className="container-home">
                <Link to="/clients" className="admin">Admin</Link>
            </div>


        </div>
    )
}

export default Home