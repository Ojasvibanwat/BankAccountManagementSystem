import React, { useEffect } from "react";
import { useParams } from "react-router";
import {useRef} from 'react';

const Deposit = () => {
  /*const firstRef = useRef(null);
  const lastRef = useRef(null);*/
  const amountRef=useRef(null);

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ access input values here
    /*console.log('first 👉️', firstRef.current.value);
    console.log('last 👉️', lastRef.current.value);*/
    console.log('amount 👉️', amountRef.current.value);


    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
    <label>Enter the amount you want to deposit:
      <input
          ref={amountRef}
          id="amount"
          name="amount"
          type="text"
        />
</label><br></br>
        <button type="submit" className="submit_button">Submit form</button>
      </form>
    </div>
  );
};


export default Deposit;
