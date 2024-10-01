import React from "react";
import Dictionary from "./Dictionary";
import entriesJSON from "../emojipedia";

function App() {
  return <Dictionary entries={entriesJSON}></Dictionary>;
}

export default App;
