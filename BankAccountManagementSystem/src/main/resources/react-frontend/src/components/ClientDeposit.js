import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService'

const ClientDeposit = () => {

    var [outstandingAmount, setOutstandingAmount] = useState('')
    const [depositAmount, setDepositAmount] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    //function to deposit the amount 
    const depositClient = (c) => {

        c.preventDefault();

        ClientService.deposit(id, depositAmount).then((response) => {
            navigate(`/viewDetails/${id}`)
        }).catch(error => {
            console.log(error)
        })

    }

    //function to get a client by ID
    useEffect(() => {
        ClientService.getClientById(id).then((response) => {
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
                        <h2 className="text-center"><b>Deposit</b></h2>
                        <div className="card-body">
                            <form>
                                <table>
                                    <tr>
                                        {/* Field to display the outstanding amount */}
                                        <td><label className="form-label"> Current Balance :</label></td>
                                        <td><label className="form-label">{outstandingAmount}</label></td>
                                    </tr>
                                </table>

                                {/* Input field to get the amount to be withdrawn */}
                                <div className="form-group mb-2">
                                    <label className="form-label"> Amount to be Deposited :</label>
                                    <input
                                        type="int"
                                        placeholder="Enter amount"
                                        name="depositAmount"
                                        className="form-control"
                                        value={depositAmount}
                                        onChange={(c) => setDepositAmount(c.target.value)}
                                    >
                                    </input>
                                </div>

                                <table>
                                    <th>
                                        {/*Button to submit the entry*/}
                                        <button className="greenButton" onClick={(c) => depositClient(c)}>Submit</button>
                                    </th>

                                    <th>
                                        {/*Button to cancel*/}
                                        <Link to={`/viewDetails/${id}`} className="orangeButton">Cancel</Link>
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
export default ClientDeposit
