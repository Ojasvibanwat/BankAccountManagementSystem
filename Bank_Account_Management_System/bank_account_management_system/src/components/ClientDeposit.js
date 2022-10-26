import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService'

const ClientDeposit= () => {
    const [name, setName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [balance, setBalance] = useState('')
    const [outstandingAmount, setOutstandingAmount] = useState('')
    const [dateOfJoining, setDateOfJoining] = useState('')
    const [password, setPassword] = useState('')
    const [depositAmount, setDepositAmount] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const depositClient = (c) => {
        c.preventDefault();

        const client = { name, accountNumber, balance, outstandingAmount, dateOfJoining, password }


        ClientService.deposit(id, depositAmount).then((response) => {
            navigate(`/viewBalance/${id}`)
        }).catch(error => {
            console.log(error)
        })

    }

    useEffect(() => {
        ClientService.getClientById(id).then((response) => {
            setName(response.data.name)
            setAccountNumber(response.data.accountNumber)
            setBalance(response.data.balance)
            setOutstandingAmount(response.data.outstandingAmount)
            setDateOfJoining(response.data.dateOfJoining)
            setPassword(response.data.password)
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
                        <h2 className="text-center">Deposit</h2>
                        <div className="card-body">
                            <form>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Outstanding Amount :</label><div>{outstandingAmount}</div>
                                </div>
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

                                <button className="btn btn-success" onClick={(c) => depositClient(c)}>Submit</button>
                                <Link to="/clients" className="btn btn-danger">Cancel</Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientDeposit
