import React from 'react'
import '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/BankAccountManagementSystem/src/main/resources/react-frontend/src/index.js'
import linkedin from '/home/lab-user/Desktop/BAMS/BankAccountManagementSystem/BankAccountManagementSystem/src/main/resources/react-frontend/src/linkedin.webp'

const About = () => {
    return (
        <div className="container-about">
            <br />
            <h2 className="text-center"> About Us</h2>

            <div className="content">
                <br />
                <p>BSV's values guide our actions, from our approach to supporting small businesses and community engagement to our ESG reporting.</p>
                <br />
                <center><h4>Our Values</h4></center>
                <ul>
                    <li>Customer Centricity</li>
                    <li>Ethics</li>
                    <li>Transparency</li>
                    <li>Teamwork</li>
                    <li>Ownership</li>
                </ul>

                <br />
                <center><h4>Contact us</h4></center>
                <center>
                    <table>
                        <tr>
                            <th><a href="https://www.linkedin.com/in/dharshika-s-789a481b8/" target="_blank" rel="noreferrer">
                                <img src={linkedin} alt="LinkedIn Dharshika" height={"60px"} /> </a></th>
                            <th><a href="https://www.linkedin.com/in/kshitij-patne-83721a19b" target="_blank" rel="noreferrer">
                                <img src={linkedin} alt="LinkedIn Kshitij" height={"60px"} /> </a></th>
                            <th><a href="https://www.linkedin.com/in/prsrohit-035739186" target="_blank" rel="noreferrer">
                                <img src={linkedin} alt="LinkedIn Raghava" height={"60px"} /> </a></th>
                            <th><a href="https://www.linkedin.com/in/yukta-saindane-53b0641b7" target="_blank" rel="noreferrer">
                                <img src={linkedin} alt="LinkedIn Yukta" height={"60px"} /> </a></th>
                            <th><a href="https://www.linkedin.com/in/ojasvibanwat/" target="_blank" rel="noreferrer">
                                <img src={linkedin} alt="LinkedIn Ojasvi" height={"60px"} /> </a></th>
                        </tr>
                        <tr>
                            <td>Dharshika</td>
                            <td>Kshitij</td>
                            <td>Raghava</td>
                            <td>Yukta</td>
                            <td>Ojasvi</td>
                        </tr>

                    </table>
                    <br />
                </center>
                <center><h4>Technologies Used</h4></center>
                <ul  >
                    <li>Database : MySQL</li>
                    <li>Front-End : React JS</li>
                    <li>Back-End : Spring Boot</li>
                </ul>

            </div>
        </div>
    )
}

export default About