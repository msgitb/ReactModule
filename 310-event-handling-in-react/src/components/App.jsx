import React, { useState } from "react";

function App() {
  const backGorundStyleBlack = { background: "black" };
  const backGorundStyleNone = { background: "" };

  const [style, setStyle] = useState(backGorundStyleNone);

  const updateStyleBlack = (styles) => {
    setStyle(backGorundStyleBlack);
  };

  const updateStyleNone = (styles) => {
    setStyle(backGorundStyleNone);
  };

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={style}
        onMouseOver={updateStyleBlack}
        onMouseOut={updateStyleNone}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
