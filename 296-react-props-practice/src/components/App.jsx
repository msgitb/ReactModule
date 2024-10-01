import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function App() {
  const cards = contacts.map((element) => (
    <Card
      key={element.name}
      name={element.name}
      img={element.imgURL}
      tel={element.phone}
      email={element.email}
    ></Card>
  ));

  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {cards}
    </div>
  );
}

export default App;
