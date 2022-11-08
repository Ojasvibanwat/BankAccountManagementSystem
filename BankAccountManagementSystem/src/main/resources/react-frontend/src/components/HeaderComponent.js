import React from 'react'
import { Link } from 'react-router-dom';

//Header component
const HeaderComponent = () => {
    return (
        <div >
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">

                    <div className="mx-auto">
                        <br />
                        <a href="https://github.com/Ojasvibanwat/BankAccountManagementSystem" className="navbar-brand">
                            <h1 style={{ fontFamily: "Cambria" }}><b>Bank of Silicon Valley</b></h1>
                        </a>
                    </div>
                    <div>
                        <br />
                        <br />

                        <Link to={`/`} className="navLink">Home</Link>

                        <Link to={`/about`} className="navLink" >About</Link>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent