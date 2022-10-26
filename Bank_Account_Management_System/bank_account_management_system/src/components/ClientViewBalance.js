import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService'

const ClientViewBalance = () => {
    console.log("In create cient component")
    const [name, setName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [balance, setBalance] = useState('')
    const [outstandingAmount, setOutstandingAmount] = useState('')
    const [dateOfJoining, setDateOfJoining] = useState('')
    const [password, setPassword] = useState('')
   
    const navigate = useNavigate();
    const { id } = useParams();
    ClientService.getClientById(id).then((response) => {
        setOutstandingAmount(response.data.outstandingAmount)
        
    }).catch(error => {
        console.log(error);
    })
    const saveOrUpdateClient = (c) => {
        c.preventDefault();

        const client = { name, accountNumber, balance, outstandingAmount, dateOfJoining, password}

        if (id) {
            console.log("in if block for update")
            ClientService.saveOrUpdateClient(id, client).then((response) => {
                console.log("after updateClient function call")
                navigate('/clients')
            }).catch(error => {
                console.log(error)
            })

        } else {
            ClientService.createClient(client).then((response) => {
                console.log(response.data)
                navigate('/clients');
            }).catch(error => {
                console.log(error)
            })
        }
    }
    useEffect(() => {
        console.log("before getClient by id call")
        ClientService.getClientById(id).then((response) => {
            console.log(response.data.id)
            setName(response.data.name)
            setAccountNumber(response.data.accountNumber)
            setBalance(response.data.balance)
            setOutstandingAmount(response.data.outstandingAmount)
            setDateOfJoining(response.data.dateOfJoining)
            setPassword(response.data.password)
            

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
                         <h2 className="text-center">  Client Deposit </h2>

                        <div className="card-body">
                            <form>


                                <div className="form-group mb-2">
                                    <label className="form-label"> Current Balance :</label>
                                    <input
                                        type="int"
                                        placeholder="Enter outstanding amount"
                                        name="outstandingAmount"
                                        className="form-control"
                                        value={outstandingAmount}
                                        onChange={(c) => setOutstandingAmount(c.target.value)}
                                    >
                                    </input>
                                
                                </div>
                               
 
                                <Link to="/clients" className="btn btn-danger">Go to Client dashboard</Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientViewBalance;