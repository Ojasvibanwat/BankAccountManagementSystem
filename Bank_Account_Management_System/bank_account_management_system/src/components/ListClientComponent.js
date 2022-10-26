import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClientService from '../services/ClientService'

const ListClientComponent = () => {

    const [clients, setClients] = useState([])

    useEffect(() => {

        getAllClients();
    }, [])

    const getAllClients = () => {
        ClientService.getAllClients().then((response) => {
            setClients(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }


    const deleteClient = (clientId) => {
        ClientService.deleteClient(clientId).then((response) => {
            getAllClients();

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="container">
            <h2 className="text-center"> List Clients </h2>
            <Link to="/createClient" className="btn btn-primary mb-2">Create Client</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Client Id </th>
                    <th> Client Name </th>
                    <th> Client Account Number </th>
                    <th> Client Balance </th>
                    <th> Client Outstanding Amount </th>
                    <th> Client Date of Joining </th>
                    <th> Client Password </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        clients.map(
                            client =>
                                <tr key={client.id}>
                                    <td> {client.id} </td>
                                    <td> {client.name} </td>
                                    <td> {client.accountNumber} </td>
                                    <td> {client.balance} </td>
                                    <td> {client.outstandingAmount} </td>
                                    <td> {client.dateOfJoining} </td>
                                    <td> {client.password} </td>
                                    <td>
                                        <Link className="btn btn-info" to={`/updateClient/${client.id}`} >Update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteClient(client.id)}> Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListClientComponent