import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClientService from '../services/ClientService'

const ListClientComponent = () => {

    const [clients, setClients] = useState([])

    useEffect(() => {

        getAllClients();
    }, [])

    //function to list all the clients on home page
    const getAllClients = () => {
        ClientService.getAllClients().then((response) => {
            setClients(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    //function to delete a client by ID
    const deleteClient = (clientId) => {
        ClientService.deleteClient(clientId).then((response) => {
            getAllClients();

        }).catch(error => {
            console.log(error);
        })

    }
    return (
        <div className="container">
            <br/>
            {/* Input field to create new client */}
            <h2 className="text-center"> Client List</h2>
            <Link to="/createClient" className="btn btn-success mb-2">Create Client</Link>

            {/* Table to display all the client details */}
            <table className="table table-bordered table-striped">
                <thead className="text-center">
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
                            //displays client detail in tabular format
                                <tr key={client.id}>
                                    <td> {client.id} </td>
                                    <td> {client.name} </td>
                                    <td> {client.accountNumber} </td>
                                    <td> {client.balance} </td>
                                    <td> {client.outstandingAmount} </td>
                                    <td> {client.dateOfJoining} </td>
                                    <td> ******* </td>
                                    <td>
                                        <table>
                                            <th>
                                                {/* button to update a client */}
                                            <Link className="btn btn-primary" to={`/updateClient/${client.id}`} >Update</Link>
                                            </th>

                                            <th>
                                                {/* button to delete a client */}
                                            <button className="btn btn-danger" onClick={() => deleteClient(client.id)}> Delete</button>

                                            </th>
                                        </table>
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