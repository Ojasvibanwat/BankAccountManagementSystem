import React from 'react'
import '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/Bank_Account_Management_System/bank_account_management_system/src/index.js';
import linkedin from '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/Bank_Account_Management_System/bank_account_management_system/src/linkedin.webp';

const About = () => {
    return (
        <div className="container-about">
            <br />
            <h2 className="text-center"> About Us</h2>

            <div className="content">
                <br />
                <p>To be the preferred financial solutions provider excelling in customer delivery through insight, empowered employees and smart use of technology</p>
                <center><h4>Our Values</h4></center>
                <ul>
                    <li>Customer Centricity</li>
                    <li>Ethics</li>
                    <li>Transparency</li>
                    <li>Teamwork</li>
                    <li>Ownership</li>
                </ul>

                <p>
                To be the preferred financial solutions provider excelling in customer delivery through insight, empowered employees and smart use of technology
                </p>

                <center><h4>Contact us</h4></center>
                <center>
                    <a href="https://www.linkedin.com/login" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="LinkedIn" height={"60px"} /> </a>
                </center>

                <ul  >
                    <li>Call: 1800-419-5959</li>
                    <li>SMS BAL to 56161600 or +918691000002 to get your Account Balance</li>
                    <li>Call: 1800-419-6969</li>
                    <li>SMS MINI to 56161600 or +918691000002 to get your Mini Statement</li>
                </ul>


            </div>
        </div>
    )
}

export default About