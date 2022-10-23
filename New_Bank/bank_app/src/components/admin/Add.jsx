import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link,useHistory } from "react-router-dom";

import ClientServices from "../../services/ClientServices";
import DatePicker from 'react-datepicker';

const AddOrUpdateClient = () =>{
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [balance,setBal] = useState('')
    const [outstandingAmt, setOutAmt] = useState('')
    const [dateOfJoining,setDoj] = useState(new Date())
    const [password, setPwd] = useState('')
    const {id} = useParams();

    useEffect(() => {
        ClientServices.getClientById(id).then((response) =>{
            setName(response.data.name)
            setEmail(response.data.email)
            setBal(response.data.balance)
            setOutAmt(response.data.outstandingAmt)
            setDoj(new Date(response.data.dateOfJoining))
            setPwd(response.data.password)
            console.log(name+" "+dateOfJoining)
            
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const AddOrUpdate=(e)=>{
        e.preventDefault();
        const client={name,email,balance,outstandingAmt,dateOfJoining}
        console.log(client);
        if(id){
            ClientServices.updateClient(id,client)
            .then((response)=>{
                console.log("updated successfully")
                //history.pushState("/AdminHome")
            })
            .catch((error)=>{
                console.log(error)
            })
            
        }
        else{
            ClientServices.createClient(client)
            .then(response=>{
                console.log(response.data)
                //history.pushState("/AdminHome")
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
const title=()=>{
    return id?<h2>Update Client</h2>:<h2>Add Client</h2>;
}

return (
    <div className="create">
        <div class="container">
            {
                title()
            }
            <div className="card-body">
                <form id="create-form">
                    <div className="form-group">
                        <label className="form-label">Name:</label>
                        <input
                        type = "text"
                        placeholder = "Enter name"
                        name = "name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                    <label className="form-label">Email:</label>
                        <input
                        type = "email"
                        placeholder = "exm@example.com"
                        name = "email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                    <label className="form-label">Balance:</label>
                        <input
                        type = "number"
                        placeholder = "enter balance"
                        name = "bal"
                        className="form-control"
                        value={balance}
                        onChange={(e) => setBal(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                    <label className="form-label">Outstanding Amount:</label>
                        <input
                        type = "number"
                        placeholder = "outstanding amount"
                        name = "outAmt"
                        className="form-control"
                        value={outstandingAmt}
                        onChange={(e) => setOutAmt(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                    <label className="form-label">DOJ:</label>
                        <DatePicker
                        selected={ dateOfJoining }
                        onChange={(date)=>setDoj(date)}
                        name="doj"
                        dateFormat = "dd/MM/yyyy"
                        maxDate={new Date()}
                        filterDate={date=>date.getDay()!==6&&date.getDay()!==0}
                        isClearable
                        showYearDropdown
                        scrollableMonthYearDropdown
                        />
                    </div>

                    <button className="btn-success" onclick={AddOrUpdate} >
                        {id?"Update Client": "Add Client"}
                    </button>
                    <Link to="/AdminHome" className="btn-danger">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
)


}

export default AddOrUpdateClient;

/*import React from "react";



function Add() {
  return (
    <div className="AdminHome">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="/home/lab-user/Downloads/download.jpeg"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Greetings</h1>
            <p>Welcome
            </p>
            <form>
              <label>Amount to be withdrawn
              <input type="text" name="name" />
              </label>
           <input type="submit" value="Submit" />
           </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;*/