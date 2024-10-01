import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Jack Bauer"
      imgSrc="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      number="+987 654 321"
      email="jack@nowhere.com"
    ></Card>

    <Card
      name="Chuck Norris"
      imgSrc="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      number="+918 372 574"
      email="gmail@chucknorris.com"
    />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
