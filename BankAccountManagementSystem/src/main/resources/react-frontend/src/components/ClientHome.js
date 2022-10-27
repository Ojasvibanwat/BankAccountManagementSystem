import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClientService from '../services/ClientService'
import '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/BankAccountManagementSystem/src/main/resources/react-frontend/src/index.js'
const ClientHome = () => {

    const [id, setId] = useState('')


    useEffect(() => {

        clientHome();
    }, [])

    //Fetches client details to be updated using ID
    const clientHome = () => {
        ClientService.getClientById(id).then((response) => {
            setId(response.data.id)

        }).catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="container">
            <br />
            <h2 className="text-center"> Client Home</h2>

            <div className="container-home" >
                {/*Input field to get the client ID*/}
                <div className="form-group mb-2">
                    <label className="form-label"> Enter ID
                     for client functions :</label>
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

                {/*Link that directs to the client details*/}


                <Link to={`/viewDetails/${id}`} className="client">View Details</Link>
            </div> 
           


        </div>
    )
}

export default ClientHome