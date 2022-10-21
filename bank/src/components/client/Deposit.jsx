import React, { useEffect } from "react";
import { useParams } from "react-router";

function Deposit() {
  

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
            <p>Welcome
            </p>
            <form>
              <label>Amount to be deposited
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

export default Deposit;
