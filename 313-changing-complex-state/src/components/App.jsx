import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  const [heading, setHeading] = useState("");

  const updateName = (ev) => {
    const { name, value } = ev.target;
    const newFullName = Object.create(fullName);
    newFullName[name] = value;
    setFullName(newFullName);
  };

  const updateHeading = (ev) => {
    setHeading(`${fullName.fName} ${fullName.lName}`);
    ev.preventDefault();
  };

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <form onSubmit={updateHeading}>
        <input
          required
          value={fullName.fName}
          onChange={updateName}
          name="fName"
          placeholder="First Name"
        />
        <input
          required
          value={fullName.lName}
          onChange={updateName}
          name="lName"
          placeholder="Last Name"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
