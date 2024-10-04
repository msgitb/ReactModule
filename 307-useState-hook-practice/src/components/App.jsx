import React from "react";
import { useState } from "react";

const getTime = () => {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
};

function App() {
  const [time, setTime] = useState(getTime());

  const updateTime = () => {
    setTime(getTime());
  };

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
