import React from "react";
import { Link } from 'react-router-dom';
import Deposit from './Deposit';
function home() {
  return (
    <div className="home">
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
            <p> Choose the functionality
            </p>
            <Link to="/Deposit">
              <button type="button">Deposit</button>
              </Link>

              <Link to="/Withdraw">
                <button type="button">Withdraw</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;