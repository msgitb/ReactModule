import React from "react";
import Card from "./Card";
import contacts from "../contacts";

const cards = contacts.map((element) => (
  <Card
    key={element.id}
    name={element.name}
    img={element.imgURL}
    tel={element.phone}
    email={element.email}
  ></Card>
));

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {cards}
    </div>
  );
}

export default App;
