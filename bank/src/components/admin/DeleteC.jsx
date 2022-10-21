import React from "react";

function DeleteC() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
      {
        username: 1,
        password: 1
      }
    ];
    const errors = {
      uname: "invalid id",
      pass: "invalid id"
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      var { uname, pass } = document.forms[0];
      const userData = database.find((user) => user.username === uname.value);
      if (userData) {
          if (userData.password !== pass.value) {
              setErrorMessages({ name: "pass", message: errors.pass });
    } else {
      setIsSubmitted(true);
    }
  } else {
      setErrorMessages({ name: "uname", message: errors.uname });
  }
};



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
              <label>Enter the ID of the client to be deleted: 
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

export default DeleteC;