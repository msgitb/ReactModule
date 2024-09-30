import React from "react";
import ReactDom from "react-dom";

const name = "Marcelo Silva";
const currentYear = new Date().getFullYear();

const img = "https://picsum.photos/500";

const customStyle = { color: "red", border: "1px solid black" };

ReactDom.render(
  <>
    <h1 contentEditable="true" spellCheck="true"></h1>
    <img src={img} />

    <p style={customStyle}>Created by {name}</p>
    <p>Copyright {currentYear}</p>
  </>,
  document.getElementById("root")
);
