import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const HandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((preValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fname: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else if (name === "email") {
        return {
          fname: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={HandleChange} name="fName" placeholder="First Name" />
        <input onChange={HandleChange} name="lName" placeholder="Last Name" />
        <input onChange={HandleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
