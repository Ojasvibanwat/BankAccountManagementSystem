import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService'

const ClientViewDetails = () => {
    const [name, setName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [balance, setBalance] = useState('')
    const [outstandingAmount, setOutstandingAmount] = useState('')
    const [dateOfJoining, setDateOfJoining] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();
    const client = { name, accountNumber, balance, outstandingAmount, dateOfJoining, password }
    const view = (c) => {
        c.preventDefault();


        ClientService.viewBalance(id, client).then((response) => {
            navigate('/clients')
        }).catch(error => {
            console.log(error)
        })

    }

    useEffect(() => {
        ClientService.getClientById(id).then((response) => {
            console.log(response.data.id)
            setName(response.data.name)
            setAccountNumber(response.data.accountNumber)
            setBalance(response.data.balance)
            setOutstandingAmount(response.data.outstandingAmount)
            setDateOfJoining(response.data.dateOfJoining)
            setPassword(response.data.password)
            name = response.data.name;
            accountNumber = response.data.accountNumber;
            balance = response.data.balance;
            outstandingAmount = response.data.outstandingAmount;
            password = response.data.password;
            dateOfJoining = response.data.dateOfJoining;
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
                        <h2 className="text-center">View Client Details (Balance)</h2>
                        <div className="card-body">
                            <form>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Name :</label>
                                    <div>{name}</div>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Account Number :</label>
                                    <div>{accountNumber}</div>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Balance :</label>
                                    <div>{balance}</div>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Outstanding Amount :</label>
                                    <div>{outstandingAmount}</div>
                                </div>
                                <Link to={`/deposit/${id}`} className="btn btn-success">Deposit</Link>
                                <Link to={`/withdraw/${id}`} className="btn btn-danger">Withdraw</Link>

                                <Link to="/clients" className="btn btn-info">Admin Home</Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientViewDetails
