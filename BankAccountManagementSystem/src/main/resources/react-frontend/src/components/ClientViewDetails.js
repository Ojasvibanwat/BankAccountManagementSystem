import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService'

const ClientViewDetails = () => {

    // declaring the client parameters
    const [name, setName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [balance, setBalance] = useState('')
    const [outstandingAmount, setOutstandingAmount] = useState('')
    const { id } = useParams();

    //Fetches client details to be displayed using ID
    useEffect(() => {
        ClientService.getClientById(id).then((response) => {
            console.log(response.data.id)
            setName(response.data.name)
            setAccountNumber(response.data.accountNumber)
            setBalance(response.data.balance)
            setOutstandingAmount(response.data.outstandingAmount)
        }).catch(error => {
            console.log(error)
        })

    }, [id])

    return (
        <div>
            <br /><br />            <br/>

            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center"><b>Client Details</b></h2>
                        <div className="card-body">
                            <form>

                                <table >
                                    <tr>
                                        {/* Field to display the name of the client */}
                                        <td className="alignright">
                                            <label className="form-label"> Name </label>
                                        </td>
                                        <td><label className="form-label">:</label></td>
                                        <td className="alignleft">
                                            <label className="form-label">{name}</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Field to display the account number of the client */}
                                        <td className="alignright">
                                            <label className="form-label"> Account Number </label>
                                        </td>
                                        <td><label className="form-label">:</label></td>
                                        <td className="alignleft">
                                            <label className="form-label">{accountNumber}</label>
                                        </td>
                                    </tr>
                                    <tr>
                                        {/* Field to display the balance of the client */}
                                        <td className="alignright">
                                            <label className="form-label"> Initial Balance </label>
                                        </td>
                                        <td><label className="form-label">:</label></td>
                                        <td className="alignleft">
                                            <label className="form-label">{balance}</label>
                                        </td>
                                    </tr>
                                    {/* Field to display the outstanding amount of the client */}
                                    <tr>
                                        <td className="alignright">
                                            <label className="form-label"> Current Balance </label>
                                        </td>
                                        <td><label className="form-label">:</label></td>
                                        <td className="alignleft">
                                            <label className="form-label">{outstandingAmount}</label>
                                        </td>
                                    </tr>
                                </table>

                                <table>
                                    {/*Button to deposit the amount*/}
                                    <th>
                                        <Link to={`/deposit/${id}`} className="greenButton">Deposit</Link>
                                    </th>

                                    {/*Button to withdraw the amount*/}
                                    <th>
                                        <Link to={`/withdraw/${id}`} className="orangeButton">Withdraw</Link>

                                    </th>

                                    {/*Button that redirects to the Client Home Page*/}
                                    <th>
                                        <Link to="/clientHome" className="blueButton">Client Home</Link>

                                    </th>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientViewDetails