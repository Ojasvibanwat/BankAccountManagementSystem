import React from 'react'
import { Link } from 'react-router-dom';
import '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/BankAccountManagementSystem/src/main/resources/react-frontend/src/index.js'
const Home = () => {
    return (
        <div className="container">
            <br />
            <h2 className="text-center"> Welcome</h2>

            <div className="container-home" >
                
                {/* button that redirects to Client Home Page */}  
                <Link to={`/clientHome`} className="client">Client</Link>
            </div> 
            <div className="container-home">
                 {/* button that redirects to Home Page */}  
                <Link to="/clients" className="admin">Admin</Link>
            </div>
        </div>
    )
}
export default Home