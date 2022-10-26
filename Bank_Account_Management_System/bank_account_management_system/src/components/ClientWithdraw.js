import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService'

const ClientWithdraw = () => {

    const [outstandingAmount] = useState('')
    const [withdrawAmount, setWithdrawAmount] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const withdrawClient = (c) => {
        c.preventDefault();

        ClientService.withdraw(id, withdrawAmount).then((response) => {
            navigate(`/viewDetails/${id}`)
        }).catch(error => {
            console.log(error)
        })

    }

    useEffect(() => {
        ClientService.getClientById(id).then((response) => {
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

                                <div className="form-group mb-2">
                                    <label className="form-label"> Outstanding Amount :</label><div>{outstandingAmount}</div>
                                </div>
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

                                <button className="btn btn-success" onClick={(c) => withdrawClient(c)}>Submit</button>
                                <Link to="/clients" className="btn btn-danger">Cancel</Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientWithdraw
