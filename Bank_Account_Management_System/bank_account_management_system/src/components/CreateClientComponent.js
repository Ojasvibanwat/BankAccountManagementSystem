import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClientService from '../services/ClientService'
import DatePicker from 'react-datepicker';  
   
import "react-datepicker/dist/react-datepicker.css";  


const CreateClientComponent = () => {
    console.log("In create cient component")
    const [name, setName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [balance, setBalance] = useState('')
    const [outstandingAmount, setOutstandingAmount] = useState('')
    const [dateOfJoining,setDateOfJoining]=useState(new Date())
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateClient = (c) => {
        c.preventDefault();

        const client = { name, accountNumber, balance, outstandingAmount, dateOfJoining, password }

        if (id) {
            console.log("in if block for update")
            ClientService.updateClient(id, client).then((response) => {
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

    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Client</h2>
        } else {
            return <h2 className="text-center">Create Client</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">

                        {
                            title()
                        }
                        <div className="card-body">
                            <form>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter full name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(c) => setName(c.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Account Number :</label>
                                    <input
                                        type="int"
                                        placeholder="Enter account number"
                                        name="accountNumber"
                                        className="form-control"
                                        value={accountNumber}
                                        onChange={(c) => setAccountNumber(c.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Balance :</label>
                                    <input
                                        type="int"
                                        placeholder="Enter balance"
                                        name="balance"
                                        className="form-control"
                                        value={balance}
                                        onChange={(c) => setBalance(c.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Outstanding Amount :</label>
                                    <input
                                        type="int"
                                        placeholder="Enter outstandingAmount"
                                        name="outstandingAmount"
                                        className="form-control"
                                        value={outstandingAmount}
                                        onChange={(c) => setOutstandingAmount(c.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Date of Joining :</label>
                                    
                                   
                                    <DatePicker  
                                        selected={ dateOfJoining }  
                                        onChange={(date)=>setDateOfJoining(date)}  
                                        name="dateOfJoining"  
                                        dateFormat="dd/MM/yyyy" 
                                        maxDate={new Date()} 
                                        filterDate={date=>date.getDay()!==6&&date.getDay()!==0}
                                        isClearable
                                        showYearDropdown
                                        scrollableMonthYearDropdown
                                     />  
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Password :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(c) => setPassword(c.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="btn btn-success" onClick={(c) => saveOrUpdateClient(c)}>Submit</button>
                                <Link to="/clients" className="btn btn-danger">Cancel</Link>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateClientComponent