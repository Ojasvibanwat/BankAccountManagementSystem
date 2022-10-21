import React from "react";
import { Link } from 'react-router-dom';
import add from './Add';

function AdminHome() {
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
            <p> Choose the functionality
            </p>

            <Link to="/Add">
              <button type="button">Add Client</button>
            </Link>

            <Link to="/DeleteC">
              <button type="button">Delete Client</button>
            </Link>

            <Link to="/Retrieve">
              <button type="button">Retrieve Client</button>
            </Link>

            <Link to="/Update">
              <button type="button">Update Client</button>
            </Link>

            <Link to="/View">
              <button type="button">View all Clients</button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHome;