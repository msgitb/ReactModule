import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const handleUpdate = (ev) => {
    const { name, value } = ev.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (ev) => {};

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleUpdate}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleUpdate}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          type="email"
          onChange={handleUpdate}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
