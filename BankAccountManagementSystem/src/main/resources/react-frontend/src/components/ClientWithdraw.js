import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService'

const ClientWithdraw = () => {

    const [outstandingAmount, setOutstandingAmount] = useState('')
    const [withdrawAmount, setWithdrawAmount] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    //function to withdraw the amount 
    const withdrawClient = (c) => {
        c.preventDefault();

        ClientService.withdraw(id, withdrawAmount).then((response) => {
            navigate(`/viewDetails/${id}`)
        }).catch(error => {
            this.setState({ errorMessage: error.message })
        })

    }

    //function to delete a client by ID
    useEffect(() => {
        ClientService.getClientById(id).then((response) => {
            setOutstandingAmount(response.data.outstandingAmount)
            outstandingAmount = response.data.outstandingAmount;
        }).catch(error => {
            console.log(error)
        })

    }, [])

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Withdraw</h2>
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
                                    <label className="form-label"> Amount to be Withdrawn :</label>
                                    <input
                                        type="int"
                                        placeholder="Enter amount"
                                        name="withdrawAmount"
                                        className="form-control"
                                        value={withdrawAmount}
                                        onChange={(c) => setWithdrawAmount(c.target.value)}
                                    >
                                    </input>
                                </div>
                                <table>

                                    {/*Button to submit the entry*/}
                                    <th><button className="btn btn-success" onClick={(c) => withdrawClient(c)}>Submit</button></th>

                                    {/* Button to cancel */}
                                    <th><Link to={`/viewDetails/${id}`} className="btn btn-danger">Cancel</Link></th>
                                </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClientWithdraw
