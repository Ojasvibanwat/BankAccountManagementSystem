import React from 'react'
import { Link } from 'react-router-dom';
import '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/BankAccountManagementSystem/src/main/resources/react-frontend/src/index.js'
const Home = () => {
    return (
        <div className="container">
            <br/>
            <br />
            <h2 className="text-center"> <b>Welcome to BSV!</b></h2>
            <br />
            <br/>

            <div className="container center" >
                {/* button that redirects to Client Home Page */}
                <Link to={`/clientHome`} className="orangeButton">Client</Link>
            </div>
            <br />
            <div className="container center">
                {/* button that redirects to Home Page */}
                <Link to="/clients" className="greenButton">Admin</Link>
            </div>
        </div>
    )
}
export default Home