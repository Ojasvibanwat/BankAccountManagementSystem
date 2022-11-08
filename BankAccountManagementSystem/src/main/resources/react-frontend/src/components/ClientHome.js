import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ClientService from '../services/ClientService'
import '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/BankAccountManagementSystem/src/main/resources/react-frontend/src/index.js'

const ClientHome = (c) => {

    const [id, setId] = useState('')
    const navigate = useNavigate();

    useEffect(() => {
        clientHome();
    }, [])

    //Fetches client details to be updated using ID
    const clientHome = () => {
        ClientService.getClientById(id).then((response) => {
            if(response.data.id){
                navigate(`/viewDetails/${id}`)
            }
            else {
                alert("Client does not exist!");
            }
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <br />
            <br />
            <h2 className="text-center"> <b>Client Home</b></h2>
            <br />
            <div className="container" >
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
                <div className="center">
                    <button className="blueButton" onClick={(c) => clientHome(c)}>View Details</button>
                </div>
            </div>
        </div>
    )
}

export default ClientHome